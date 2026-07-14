# Cahier des charges — Phase P0

## 1. Identification du projet

**Nom du projet :** Portfolio Olivier Polynice  
**Type de projet :** Portfolio professionnel  
**Technologie principale :** React avec Vite  
**Phase :** P0 — Initialisation et préparation  
**Auteur :** Olivier Polynice  

## 2. Contexte

Le projet consiste à développer un portfolio professionnel moderne permettant de présenter le profil d’Olivier Polynice, ses compétences, ses expériences, ses projets et ses coordonnées.

Le portfolio sera principalement orienté vers les domaines suivants :

- cybersécurité ;
- réseaux ;
- cloud ;
- DevSecOps ;
- développement web ;
- systèmes ;
- supervision et monitoring.

Le projet doit permettre de valoriser un profil étudiant en Master Réseaux, Cybersécurité et Cloud auprès des recruteurs et des entreprises.

## 3. Objectifs de la phase P0

La phase P0 a pour objectif de préparer une base technique propre et stable avant le développement de l’interface graphique.

Les objectifs sont :

- créer le projet React ;
- utiliser Vite comme outil de développement ;
- nettoyer les fichiers inutiles générés par défaut ;
- installer les dépendances principales ;
- préparer l’arborescence du projet ;
- créer les composants React de base ;
- créer les sections principales ;
- créer les futures pages ;
- séparer les données de l’interface graphique ;
- initialiser Git ;
- créer le dépôt GitHub ;
- préparer une stratégie de branches ;
- documenter le projet.

## 4. Périmètre fonctionnel de P0

La phase P0 ne vise pas encore à créer le design final du portfolio.

Elle couvre uniquement :

- l’initialisation du projet ;
- la configuration de l’environnement ;
- la création de l’architecture ;
- la préparation des fichiers ;
- la préparation des données ;
- la gestion du versionnement ;
- la documentation.

Les fonctionnalités visuelles complètes seront développées lors des phases suivantes.

## 5. Technologies retenues

### Frontend

- React
- JavaScript
- HTML5
- CSS3
- Vite

### Bibliothèques

- React Router DOM
- Lucide React
- Framer Motion

### Outils

- Node.js
- npm
- Git
- GitHub
- Visual Studio Code
- ESLint

## 6. Dépendances principales

Les dépendances supplémentaires sont installées avec :

```bash
npm install react-router-dom lucide-react framer-motion
```

### Rôle des dépendances

#### React Router DOM

Permettra de gérer plusieurs pages et plusieurs routes dans l’application.

Exemples de routes prévues :

```text
/
/projects
/projects/:projectId
/*
```

#### Lucide React

Permettra d’utiliser des icônes cohérentes et professionnelles dans l’interface.

#### Framer Motion

Permettra d’ajouter des animations et des transitions fluides.

## 7. Arborescence prévue

```text
portfolio-olivier/
├── docs/
│   ├── P0_CAHIER_DES_CHARGES.md
│   └── P0_VALIDATION.md
├── public/
│   ├── cv/
│   ├── icons/
│   ├── images/
│   └── projects/
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   ├── sections/
│   ├── styles/
│   ├── utils/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## 8. Composants préparés

Les composants suivants doivent être créés dans `src/components` :

- `Navbar.jsx`
- `Footer.jsx`
- `SectionTitle.jsx`
- `Button.jsx`
- `ProjectCard.jsx`
- `SkillCard.jsx`
- `SocialLinks.jsx`

Pendant P0, ces composants peuvent contenir une structure simple.

```jsx
function Navbar() {
  return <nav>Navigation</nav>
}

export default Navbar
```

## 9. Sections préparées

Les sections suivantes doivent être créées dans `src/sections` :

- `Hero.jsx`
- `About.jsx`
- `Skills.jsx`
- `Projects.jsx`
- `Experience.jsx`
- `Contact.jsx`

## 10. Pages préparées

Les pages suivantes doivent être créées dans `src/pages` :

- `Home.jsx`
- `ProjectsPage.jsx`
- `ProjectDetails.jsx`
- `NotFound.jsx`

## 11. Données centralisées

Les données doivent être séparées de l’interface graphique.

### Projets

Fichier : `src/data/projects.js`

### Compétences

Fichier : `src/data/skills.js`

### Profil

Fichier : `src/data/profile.js`

## 12. Gestion des fichiers publics

Les documents et images accessibles directement depuis le navigateur doivent être placés dans `public`.

```text
public/
├── cv/
├── images/
├── projects/
└── icons/
```

## 13. Gestion Git

Initialisation :

```bash
git init
```

Branche principale :

```text
main
```

Branche P0 :

```text
setup/p0-initialisation
```

Branches futures :

```text
feature/p1-homepage
feature/p2-projects
feature/p3-contact
feature/p4-animations
```

## 14. Dépôt GitHub

**Nom :** `portfolio-olivier`  
**Visibilité :** Public  
**Description :** Portfolio professionnel React consacré à la cybersécurité, au cloud, aux réseaux et au DevSecOps.

```bash
git remote add origin https://github.com/olivierpolynice/portfolio-olivier.git
```

## 15. Fichier `.gitignore`

Le fichier doit exclure au minimum :

```gitignore
node_modules/
dist/
.env
.env.local
.vscode/
*.log
```

## 16. Commandes principales

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

## 17. Contraintes techniques

- absence d’erreur bloquante ;
- absence d’erreur d’importation ;
- composants exportés correctement ;
- noms de fichiers cohérents ;
- arborescence claire ;
- données séparées de l’interface ;
- dépôt Git fonctionnel ;
- aucune donnée confidentielle versionnée ;
- branche `main` stable.

## 18. Critères de validation

La phase P0 est validée si :

- le projet démarre avec `npm run dev` ;
- la page React est accessible localement ;
- les dépendances sont installées ;
- les dossiers et fichiers demandés existent ;
- le README est complet ;
- le fichier `.gitignore` est conforme ;
- Git reconnaît le dépôt ;
- le dépôt GitHub est public ;
- la branche P0 existe ;
- le code est disponible sur GitHub ;
- la documentation P0 existe.

## 19. Livrables de la phase P0

- projet React initialisé ;
- arborescence complète ;
- composants, sections et pages de base ;
- fichiers de données ;
- `.gitignore` ;
- `README.md` ;
- dépôt GitHub public ;
- branche `setup/p0-initialisation` ;
- Pull Request vers `main` ;
- `docs/P0_CAHIER_DES_CHARGES.md` ;
- `docs/P0_VALIDATION.md`.

## 20. Phases suivantes

### P1 — Page d’accueil
Navigation, Hero, présentation, compétences et projets mis en avant.

### P2 — Projets
Liste, cartes, filtres et pages de détails.

### P3 — Contact
Formulaire, liens sociaux et téléchargement du CV.

### P4 — Animations et optimisation
Animations, responsive, accessibilité et performances.
