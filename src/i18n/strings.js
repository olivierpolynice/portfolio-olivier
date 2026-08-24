// Central dictionary for static UI text (chrome, labels, buttons).
// Section data (profile, skills, experiences, certifications,
// projects) carries its own fr/en fields and is not stored here.

export const strings = {
  fr: {
    nav: {
      accueil: 'Accueil',
      aPropos: 'À propos',
      competences: 'Compétences',
      certifications: 'Certifications',
      veille: 'Veille',
      projets: 'Projets',
      parcours: 'Parcours',
      contact: 'Contact',
      cv: 'CV',
      cvAriaLabel:
        'Télécharger le CV d’Olivier Polynice au format PDF',
      openMenu: 'Ouvrir le menu de navigation',
      closeMenu: 'Fermer le menu de navigation',
      skipLink: 'Aller au contenu principal',
      homeAriaLabel: 'Retour à l’accueil',
      languageToggleLabel: 'Passer le site en anglais',
      languageToggleShort: 'EN',
    },
    hero: {
      greeting: 'Bonjour, je suis',
      viewProjects: 'Voir mes projets',
      contactMe: 'Me contacter',
      available: 'Disponible',
    },
    about: {
      eyebrow: 'À propos',
      title: 'Mon parcours et mes objectifs',
      description:
        'Un profil orienté cybersécurité, cloud, réseaux, DevSecOps et intelligence artificielle.',
    },
    skills: {
      eyebrow: 'Compétences',
      title: 'Technologies et domaines techniques',
      description:
        'Des compétences développées à travers mes formations, mes laboratoires et plusieurs projets concrets.',
    },
    certifications: {
      eyebrow: 'Certifications',
      title: 'Formations et compétences certifiées',
      description:
        'Des certifications obtenues auprès d’organismes reconnus afin de consolider mes compétences en cybersécurité, réseaux et systèmes.',
      recentBadge: 'Certification récente',
      obtainedIn: 'Obtenue en',
      viewCertificate: 'Voir le certificat',
      verifyOnCredly: 'Vérifier sur Credly',
    },
    techWatch: {
      eyebrow: 'Veille technologique',
      title: 'Je reste informé des évolutions technologiques',
      description:
        'Je suis régulièrement les actualités liées à la cybersécurité, au cloud, aux réseaux, au DevSecOps et à l’intelligence artificielle à partir de sources officielles et spécialisées.',
      filterAriaLabel: 'Filtrer les actualités',
      note:
        'Les actualités ci-dessous sont mises à jour automatiquement et restent affichées en français, langue de leurs sources.',
    },
    projects: {
      eyebrow: 'Projets',
      title: 'Des projets techniques concrets',
      description:
        'Une sélection de projets réalisés en cybersécurité, intelligence artificielle, réseaux, développement, DevOps et ingénierie des données.',
      filterAriaLabel: 'Filtrer les projets par catégorie',
      otherWorks: 'Autres réalisations',
      discoverOthers: 'Découvrez également mes autres projets',
      projectsIn: (filter) => `Projets en ${filter}`,
      empty:
        'Aucun projet n’est encore disponible dans cette catégorie.',
      featuredBadge: 'Projet phare',
      problemHandled: 'Problème traité',
      role: 'Rôle :',
      mainFeatures: 'Fonctionnalités principales',
      technologiesUsed: 'Technologies utilisées',
      viewDetails: 'Voir les détails',
      detailsNote:
        'Cette page de détail reste disponible en français pour le moment.',
    },
    experience: {
      eyebrow: 'Parcours',
      title: 'Mon parcours académique et professionnel',
      description:
        'Une chronologie associant formation en télécommunications, informatique, cybersécurité et expériences professionnelles.',
    },
    resume: {
      eyebrow: 'Curriculum vitæ',
      title: 'Retrouvez mon parcours et mes compétences',
      description:
        'Une présentation synthétique de ma formation, de mes expériences, de mes projets et de mes compétences techniques.',
      updated: 'CV mis à jour en juillet 2026',
      pdfFormat: 'Format PDF',
      download: 'Télécharger mon CV',
      downloadNote: 'Téléchargement direct au format PDF',
      cvLanguageNote: 'CV disponible en français uniquement.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Échangeons sur votre opportunité',
      description:
        'Je suis disponible pour une alternance en Master 2 à partir de septembre 2026, principalement en cybersécurité, cloud ou DevSecOps.',
      stayInTouch: 'Restons en contact',
      intro:
        'Vous pouvez me contacter directement par e-mail, consulter mon profil LinkedIn ou découvrir mes projets sur GitHub.',
      email: 'Adresse e-mail',
      location: 'Localisation',
      availability: 'Disponibilité',
      findMeAlso: 'Retrouvez-moi également sur :',
      sendMessage: 'Envoyer un message',
      mailNote: 'Votre logiciel de messagerie s’ouvrira automatiquement.',
      name: 'Nom',
      namePlaceholder: 'Votre nom',
      emailField: 'Adresse e-mail',
      emailPlaceholder: 'vous@exemple.com',
      subject: 'Objet',
      subjectPlaceholder: 'Objet de votre message',
      message: 'Message',
      messagePlaceholder:
        'Présentez votre message ou votre opportunité...',
      submit: 'Préparer l’e-mail',
      formNote:
        'Aucun message ni aucune donnée ne sont enregistrés sur ce site.',
    },
    footer: {
      description:
        'Portfolio orienté cybersécurité, cloud, réseaux et DevSecOps.',
      findMe: 'Retrouvez-moi',
      rightsReserved: 'Tous droits réservés.',
      backToTop: 'Retour en haut',
    },
    categories: {
      Tous: 'Tous',
      Cybersécurité: 'Cybersécurité',
      Cloud: 'Cloud',
      'Cloud et DevOps': 'Cloud et DevOps',
      Réseaux: 'Réseaux',
      DevSecOps: 'DevSecOps',
      IA: 'IA',
      Développement: 'Développement',
      Data: 'Data',
      'Intelligence artificielle': 'Intelligence artificielle',
    },
  },

  en: {
    nav: {
      accueil: 'Home',
      aPropos: 'About',
      competences: 'Skills',
      certifications: 'Certifications',
      veille: 'Tech watch',
      projets: 'Projects',
      parcours: 'Background',
      contact: 'Contact',
      cv: 'Resume',
      cvAriaLabel:
        'Download Olivier Polynice’s resume as a PDF',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
      skipLink: 'Skip to main content',
      homeAriaLabel: 'Back to home',
      languageToggleLabel: 'Switch the site to French',
      languageToggleShort: 'FR',
    },
    hero: {
      greeting: 'Hi, I’m',
      viewProjects: 'View my projects',
      contactMe: 'Contact me',
      available: 'Available',
    },
    about: {
      eyebrow: 'About',
      title: 'My background and goals',
      description:
        'A profile focused on cybersecurity, cloud, networking, DevSecOps, and artificial intelligence.',
    },
    skills: {
      eyebrow: 'Skills',
      title: 'Technologies and technical domains',
      description:
        'Skills built through my studies, hands-on labs, and several real-world projects.',
    },
    certifications: {
      eyebrow: 'Certifications',
      title: 'Training and certified skills',
      description:
        'Certifications earned through recognized organizations to strengthen my skills in cybersecurity, networking, and systems.',
      recentBadge: 'Recent certification',
      obtainedIn: 'Earned in',
      viewCertificate: 'View certificate',
      verifyOnCredly: 'Verify on Credly',
    },
    techWatch: {
      eyebrow: 'Tech watch',
      title: 'I stay up to date with tech developments',
      description:
        'I regularly follow news related to cybersecurity, cloud, networking, DevSecOps, and artificial intelligence from official and specialized sources.',
      filterAriaLabel: 'Filter news',
      note:
        'The news items below update automatically and stay in French, the language of their sources.',
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Concrete technical projects',
      description:
        'A selection of projects in cybersecurity, artificial intelligence, networking, development, DevOps, and data engineering.',
      filterAriaLabel: 'Filter projects by category',
      otherWorks: 'Other work',
      discoverOthers: 'Discover my other projects too',
      projectsIn: (filter) => `Projects in ${filter}`,
      empty: 'No project is available in this category yet.',
      featuredBadge: 'Flagship project',
      problemHandled: 'Problem addressed',
      role: 'Role:',
      mainFeatures: 'Main features',
      technologiesUsed: 'Technologies used',
      viewDetails: 'View details',
      detailsNote:
        'This detail page is currently available in French only.',
    },
    experience: {
      eyebrow: 'Background',
      title: 'My academic and professional background',
      description:
        'A timeline combining training in telecommunications, computer science, cybersecurity, and professional experience.',
    },
    resume: {
      eyebrow: 'Résumé',
      title: 'Find my background and skills',
      description:
        'A concise overview of my education, experience, projects, and technical skills.',
      updated: 'Resume last updated in July 2026',
      pdfFormat: 'PDF format',
      download: 'Download my résumé',
      downloadNote: 'Direct download in PDF format',
      cvLanguageNote: 'Résumé available in French only.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s talk about your opportunity',
      description:
        'I’m available for a Master’s 2 work-study program starting September 2026, mainly in cybersecurity, cloud, or DevSecOps.',
      stayInTouch: 'Let’s stay in touch',
      intro:
        'You can reach me directly by email, check out my LinkedIn profile, or explore my projects on GitHub.',
      email: 'Email address',
      location: 'Location',
      availability: 'Availability',
      findMeAlso: 'Find me on:',
      sendMessage: 'Send a message',
      mailNote: 'Your email client will open automatically.',
      name: 'Name',
      namePlaceholder: 'Your name',
      emailField: 'Email address',
      emailPlaceholder: 'you@example.com',
      subject: 'Subject',
      subjectPlaceholder: 'Subject of your message',
      message: 'Message',
      messagePlaceholder: 'Introduce your message or opportunity...',
      submit: 'Prepare the email',
      formNote: 'No message or data is stored on this site.',
    },
    footer: {
      description:
        'Portfolio focused on cybersecurity, cloud, networking, and DevSecOps.',
      findMe: 'Find me',
      rightsReserved: 'All rights reserved.',
      backToTop: 'Back to top',
    },
    categories: {
      Tous: 'All',
      Cybersécurité: 'Cybersecurity',
      Cloud: 'Cloud',
      'Cloud et DevOps': 'Cloud & DevOps',
      Réseaux: 'Networking',
      DevSecOps: 'DevSecOps',
      IA: 'AI',
      Développement: 'Development',
      Data: 'Data',
      'Intelligence artificielle': 'Artificial Intelligence',
    },
  },
}

// Shared label translator for category/filter values whose underlying
// (French) value is used as a matching key in filtering logic — only
// the displayed label changes with the language, never the stored value.
export function translateCategory(value, language) {
  if (!value) {
    return value
  }

  return strings[language]?.categories?.[value] ?? value
}

const MONTHS_FR_TO_EN = {
  janvier: 'January',
  février: 'February',
  mars: 'March',
  avril: 'April',
  mai: 'May',
  juin: 'June',
  juillet: 'July',
  août: 'August',
  septembre: 'September',
  octobre: 'October',
  novembre: 'November',
  décembre: 'December',
}

// Translates a "Mois AAAA" French date label (e.g. "Août 2026") to
// English (e.g. "August 2026"). Falls back to the original string
// when the format isn't recognized.
export function translateMonthYear(value, language) {
  if (language !== 'en' || !value) {
    return value
  }

  const match = value.match(/^([A-Za-zÀ-ÿ]+)\s+(\d{4})$/)

  if (!match) {
    return value
  }

  const monthEn =
    MONTHS_FR_TO_EN[match[1].toLowerCase()]

  return monthEn ? `${monthEn} ${match[2]}` : value
}
