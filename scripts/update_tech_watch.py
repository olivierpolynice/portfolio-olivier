import html
import json
import re
import urllib.error
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urljoin


PROJECT_ROOT = Path(__file__).resolve().parent.parent

OUTPUT_FILE = (
    PROJECT_ROOT
    / "public"
    / "data"
    / "tech-watch.json"
)

MAX_ARTICLES_PER_SOURCE = 2

SOURCES = [
    {
        "category": "Cybersécurité",
        "source": "CERT-FR",
        "feed_url": "https://www.cert.ssi.gouv.fr/feed/",
        "website_url": "https://www.cert.ssi.gouv.fr/",
    },
    {
        "category": "Cloud",
        "source": "AWS News Blog",
        "feed_url": "https://aws.amazon.com/blogs/aws/feed/",
        "website_url": "https://aws.amazon.com/blogs/aws/",
    },
    {
        "category": "Réseaux",
        "source": "Cloudflare Blog",
        "feed_url": "https://blog.cloudflare.com/rss/",
        "website_url": "https://blog.cloudflare.com/",
    },
    {
        "category": "DevSecOps",
        "source": "GitHub Changelog",
        "feed_url": "https://github.blog/changelog/feed/",
        "website_url": "https://github.blog/changelog/",
    },
    {
        "category": "IA",
        "source": "Google DeepMind",
        "feed_url": "https://deepmind.google/blog/rss.xml",
        "website_url": "https://deepmind.google/discover/blog/",
    },
]


def clean_text(value):
    """Nettoie le HTML et les espaces présents dans un texte."""
    if not value:
        return ""

    text = re.sub(r"<[^>]+>", " ", value)
    text = html.unescape(text)
    text = re.sub(r"\s+", " ", text)

    return text.strip()


def shorten_text(value, maximum_length=220):
    """Réduit la description sans couper brutalement un mot."""
    text = clean_text(value)

    if len(text) <= maximum_length:
        return text

    shortened = text[:maximum_length].rsplit(" ", 1)[0]

    return f"{shortened}…"


def get_child_text(element, names):
    """Cherche le contenu d'une balise RSS ou Atom."""
    for child in element.iter():
        tag_name = child.tag.split("}")[-1].lower()

        if tag_name in names and child.text:
            return child.text.strip()

    return ""


def get_article_url(element, website_url):
    """Récupère et normalise l'adresse de l'article."""
    for child in element.iter():
        tag_name = child.tag.split("}")[-1].lower()

        if tag_name != "link":
            continue

        href = child.attrib.get("href")

        if href:
            return urljoin(website_url, href.strip())

        if child.text:
            return urljoin(
                website_url,
                child.text.strip(),
            )

    return website_url


def get_feed_entries(root):
    """Retourne les entrées d'un flux RSS ou Atom."""
    entries = []

    for element in root.iter():
        tag_name = element.tag.split("}")[-1].lower()

        if tag_name in {"item", "entry"}:
            entries.append(element)

    return entries


def fetch_source_articles(source):
    """Télécharge et transforme les actualités d'une source."""
    request = urllib.request.Request(
        source["feed_url"],
        headers={
            "User-Agent": (
                "Mozilla/5.0 "
                "Olivier-Portfolio-TechWatch/1.0"
            ),
            "Accept": (
                "application/rss+xml, "
                "application/atom+xml, "
                "application/xml, "
                "text/xml"
            ),
        },
    )

    with urllib.request.urlopen(
        request,
        timeout=20,
    ) as response:
        content = response.read()

    root = ET.fromstring(content)
    entries = get_feed_entries(root)
    articles = []

    for entry in entries[:MAX_ARTICLES_PER_SOURCE]:
        title = clean_text(
            get_child_text(entry, {"title"})
        )

        description = get_child_text(
            entry,
            {
                "description",
                "summary",
                "content",
                "encoded",
            },
        )

        published_at = clean_text(
            get_child_text(
                entry,
                {
                    "pubdate",
                    "published",
                    "updated",
                    "date",
                },
            )
        )

        article_url = get_article_url(
            entry,
            source["website_url"],
        )

        if not title:
            continue

        articles.append(
            {
                "category": source["category"],
                "title": title,
                "description": shorten_text(description)
                or (
                    "Consultez cette publication "
                    "pour découvrir les dernières "
                    "informations de cette source."
                ),
                "source": source["source"],
                "url": article_url,
                "publishedAt": published_at,
            }
        )

    return articles


def load_existing_articles():
    """Conserve les anciennes données si une source échoue."""
    if not OUTPUT_FILE.exists():
        return []

    try:
        with OUTPUT_FILE.open(
            "r",
            encoding="utf-8",
        ) as file:
            data = json.load(file)

        return data.get("articles", [])
    except (json.JSONDecodeError, OSError):
        return []


def get_existing_source_articles(
    existing_articles,
    source_name,
):
    return [
        article
        for article in existing_articles
        if article.get("source") == source_name
    ][:MAX_ARTICLES_PER_SOURCE]


def update_tech_watch():
    """Met à jour le fichier JSON de la veille."""
    existing_articles = load_existing_articles()
    all_articles = []
    successful_sources = 0

    for source in SOURCES:
        try:
            articles = fetch_source_articles(source)

            if not articles:
                raise ValueError(
                    "Aucun article trouvé dans le flux."
                )

            all_articles.extend(articles)
            successful_sources += 1

            print(
                f"[OK] {source['source']} : "
                f"{len(articles)} article(s)"
            )
        except (
            urllib.error.URLError,
            TimeoutError,
            ET.ParseError,
            ValueError,
        ) as error:
            print(
                f"[ERREUR] {source['source']} : "
                f"{error}"
            )

            previous_articles = (
                get_existing_source_articles(
                    existing_articles,
                    source["source"],
                )
            )

            all_articles.extend(previous_articles)

    if not all_articles:
        raise RuntimeError(
            "Impossible de récupérer les actualités "
            "et aucune ancienne donnée n'est disponible."
        )

    for article_id, article in enumerate(
        all_articles,
        start=1,
    ):
        article["id"] = article_id

    output_data = {
        "updatedAt": datetime.now(
            timezone.utc
        ).isoformat(),
        "successfulSources": successful_sources,
        "totalSources": len(SOURCES),
        "articles": all_articles,
    }

    OUTPUT_FILE.parent.mkdir(
        parents=True,
        exist_ok=True,
    )

    with OUTPUT_FILE.open(
        "w",
        encoding="utf-8",
    ) as file:
        json.dump(
            output_data,
            file,
            ensure_ascii=False,
            indent=2,
        )

        file.write("\n")

    print(f"\nFichier créé : {OUTPUT_FILE}")
    print(
        "Nombre total d'articles : "
        f"{len(all_articles)}"
    )


if __name__ == "__main__":
    update_tech_watch()
