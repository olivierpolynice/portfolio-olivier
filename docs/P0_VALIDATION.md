# Validation — Phase P0

## 1. Informations générales

**Projet :** Portfolio Olivier Polynice  
**Phase :** P0 — Initialisation et préparation  
**Branche :** `setup/p0-initialisation`  
**Dépôt :** `portfolio-olivier`  
**Auteur :** Olivier Polynice  

## 2. Objectif du document

Ce document rassemble les éléments permettant de vérifier que la phase P0 a été correctement réalisée.

## 3. Validation de l’environnement

### Node.js

```bash
node --version
```

- [ ] Validé
- [ ] Non validé

### npm

```bash
npm --version
```

- [ ] Validé
- [ ] Non validé

### Git

```bash
git --version
```

- [ ] Validé
- [ ] Non validé

## 4. Validation du projet React

### Installation

```bash
npm install
```

- [ ] Validé
- [ ] Non validé

### Lancement

```bash
npm run dev
```

Résultat attendu : une adresse locale, par exemple `http://localhost:5173/`.

- [ ] Validé
- [ ] Non validé

### Affichage navigateur

- [ ] La page s’ouvre
- [ ] Aucune erreur Vite bloquante
- [ ] Le composant principal fonctionne

## 5. Validation des dépendances

```bash
npm list react-router-dom lucide-react framer-motion
```

- [ ] `react-router-dom` installé
- [ ] `lucide-react` installé
- [ ] `framer-motion` installé

## 6. Validation de l’arborescence

```powershell
tree src /F
tree public /F
tree docs /F
```

### `src`

- [ ] `src/assets`
- [ ] `src/components`
- [ ] `src/data`
- [ ] `src/layouts`
- [ ] `src/pages`
- [ ] `src/sections`
- [ ] `src/styles`
- [ ] `src/utils`

### `public`

- [ ] `public/cv`
- [ ] `public/images`
- [ ] `public/projects`
- [ ] `public/icons`

### `docs`

- [ ] `docs/P0_CAHIER_DES_CHARGES.md`
- [ ] `docs/P0_VALIDATION.md`

## 7. Validation des composants

- [ ] `Navbar.jsx`
- [ ] `Footer.jsx`
- [ ] `SectionTitle.jsx`
- [ ] `Button.jsx`
- [ ] `ProjectCard.jsx`
- [ ] `SkillCard.jsx`
- [ ] `SocialLinks.jsx`

## 8. Validation des sections

- [ ] `Hero.jsx`
- [ ] `About.jsx`
- [ ] `Skills.jsx`
- [ ] `Projects.jsx`
- [ ] `Experience.jsx`
- [ ] `Contact.jsx`

## 9. Validation des pages

- [ ] `Home.jsx`
- [ ] `ProjectsPage.jsx`
- [ ] `ProjectDetails.jsx`
- [ ] `NotFound.jsx`

## 10. Validation des données

### `src/data/projects.js`

- [ ] Le fichier existe
- [ ] `projects` est exporté
- [ ] Chaque projet possède un identifiant
- [ ] Chaque projet possède un titre
- [ ] Chaque projet possède une description
- [ ] Chaque projet contient ses technologies

### `src/data/skills.js`

- [ ] Le fichier existe
- [ ] `skillCategories` est exporté
- [ ] Les compétences sont regroupées par catégorie
- [ ] Les données sont séparées de l’interface

### `src/data/profile.js`

- [ ] Le fichier existe
- [ ] `profile` est exporté
- [ ] Le nom est renseigné
- [ ] Le titre est renseigné
- [ ] La localisation est renseignée
- [ ] La disponibilité est renseignée

## 11. Validation ESLint

```bash
npm run lint
```

- [ ] Validé
- [ ] Non validé

## 12. Validation de la compilation

```bash
npm run build
```

- [ ] Compilation réussie
- [ ] Dossier `dist` créé
- [ ] Aucune erreur d’importation
- [ ] Aucune erreur de syntaxe

## 13. Validation du fichier `.gitignore`

Le fichier doit contenir au minimum :

```gitignore
node_modules/
dist/
.env
.env.local
.vscode/
*.log
```

- [ ] `node_modules` ignoré
- [ ] `dist` ignoré
- [ ] `.env` ignoré
- [ ] `.env.local` ignoré
- [ ] `.vscode` ignoré
- [ ] fichiers `*.log` ignorés

## 14. Validation Git

### Dépôt

```bash
git status
```

- [ ] Git reconnaît le dépôt

### Branches

```bash
git branch
```

- [ ] `main` existe
- [ ] `setup/p0-initialisation` existe
- [ ] La branche active est `setup/p0-initialisation`

### Dépôt distant

```bash
git remote -v
```

- [ ] `origin` pointe vers le dépôt GitHub

## 15. Validation GitHub

- [ ] Le dépôt existe
- [ ] Le dépôt est public
- [ ] Le code est visible
- [ ] La branche `main` existe
- [ ] La branche `setup/p0-initialisation` existe
- [ ] Une Pull Request P0 est créée
- [ ] La Pull Request cible `main`
- [ ] Aucun conflit n’est signalé

## 16. Validation du README

- [ ] Nom du projet
- [ ] Description
- [ ] Objectifs
- [ ] Technologies
- [ ] Instructions d’installation
- [ ] Commandes principales
- [ ] Arborescence
- [ ] Fonctionnalités prévues
- [ ] État d’avancement
- [ ] Auteur

## 17. Preuves à ajouter

Dossier recommandé :

```text
docs/screenshots/p0/
```

Captures recommandées :

- [ ] `01-projet-vscode.png`
- [ ] `02-arborescence-src.png`
- [ ] `03-arborescence-public.png`
- [ ] `04-npm-run-dev.png`
- [ ] `05-page-locale.png`
- [ ] `06-git-status.png`
- [ ] `07-git-branches.png`
- [ ] `08-git-remote.png`
- [ ] `09-depot-github.png`
- [ ] `10-pull-request-p0.png`
- [ ] `11-npm-run-lint.png`
- [ ] `12-npm-run-build.png`

## 18. Tableau de validation finale

| Contrôle | Résultat | Preuve |
|---|---|---|
| Projet React initialisé | À valider | Capture du projet |
| Dépendances installées | À valider | `npm list` |
| Serveur Vite fonctionnel | À valider | `npm run dev` |
| Arborescence créée | À valider | Capture VS Code |
| Composants créés | À valider | `src/components` |
| Sections créées | À valider | `src/sections` |
| Pages créées | À valider | `src/pages` |
| Données séparées | À valider | `src/data` |
| ESLint fonctionnel | À valider | `npm run lint` |
| Build fonctionnel | À valider | `npm run build` |
| Git initialisé | À valider | `git status` |
| Branche P0 créée | À valider | `git branch` |
| Dépôt GitHub public | À valider | Capture GitHub |
| Pull Request créée | À valider | Capture PR |
| README complet | À valider | `README.md` |
| Documentation P0 créée | À valider | Dossier `docs` |

## 19. Conclusion

La phase P0 sera considérée comme terminée lorsque tous les contrôles obligatoires seront validés.

**Décision finale :**

- [ ] P0 validée
- [ ] P0 validée avec réserves
- [ ] P0 non validée

**Observations finales :**

À compléter après les derniers tests.

## 20. Captures de preuve

### Figure P0-01 — Version de Node.js

![Version de Node.js](./screenshots/p0/P0_01_node_version.png)

*Figure P0-01 — Vérification de la version de Node.js installée sur l’environnement de développement.*

### Figure P0-02 — Version de npm

![Version de npm](./screenshots/p0/P0_02_npm_version.png)

*Figure P0-02 — Vérification de la version de npm utilisée pour gérer les dépendances du projet.*

### Figure P0-03 — Installation de Vite et des dépendances

![Installation de Vite](./screenshots/p0/P0_03_vite_installation.png)

*Figure P0-03 — Vérification de l’installation de Vite, React et des principales dépendances du portfolio.*

### Figure P0-04 — Application React locale

![Application React locale](./screenshots/p0/P0_04_react_localhost.png)

*Figure P0-04 — Application React exécutée localement avec Vite sur le port 5173.*

### Figure P0-05 — Structure du projet

![Structure du projet](./screenshots/p0/P0_05_project_structure.png)

*Figure P0-05 — Arborescence du projet comprenant les composants, les sections, les pages, les données et la documentation.*

### Figure P0-06 — État du dépôt Git

![État du dépôt Git](./screenshots/p0/P0_06_git_status.png)

*Figure P0-06 — Vérification de l’état du dépôt Git local après l’initialisation du projet.*

### Figure P0-07 — Dépôt GitHub public

![Dépôt GitHub](./screenshots/p0/P0_07_github_repository.png)

*Figure P0-07 — Dépôt GitHub public contenant le code source du portfolio React.*

### Figure P0-08 — Premier commit

![Premier commit](./screenshots/p0/P0_08_first_commit.png)

*Figure P0-08 — Historique Git montrant le premier commit d’initialisation du portfolio.*

## 21. Critères de clôture de la phase P0

La phase P0 sera considérée comme terminée lorsque toutes les conditions suivantes seront respectées :

- [ ] Node.js fonctionne ;
- [ ] npm fonctionne ;
- [ ] le projet React est créé ;
- [ ] le projet fonctionne sur `localhost` ;
- [ ] le projet compile sans erreur ;
- [ ] les dépendances principales sont installées ;
- [ ] l’arborescence du projet est créée ;
- [ ] les fichiers de données sont préparés ;
- [ ] Git est initialisé ;
- [ ] le dépôt GitHub existe ;
- [ ] le code est envoyé sur GitHub ;
- [ ] le fichier `README.md` est présent ;
- [ ] la documentation P0 est présente ;
- [ ] les captures de preuve sont ajoutées ;
- [ ] une Pull Request P0 est créée ;
- [ ] aucune erreur importante n’apparaît dans la console.

### Décision finale

- [ ] P0 validée
- [ ] P0 validée avec réserves
- [ ] P0 non validée

### Observations

À compléter après les derniers contrôles.

## 22. Livrables de la phase P0

Les livrables obligatoires de la phase P0 sont les suivants :

- [x] le dépôt GitHub public du portfolio ;
- [x] le projet React fonctionnel ;
- [x] le fichier `README.md` ;
- [x] le cahier des charges P0 ;
- [x] le document de validation P0 ;
- [x] les captures d’écran de preuve ;
- [x] l’arborescence complète du projet ;
- [x] les fichiers de données initiaux ;
- [x] la Pull Request P0 ;
- [ ] la preuve de compilation réussie.

### Détail des livrables

| Livrable | Emplacement ou preuve | Statut |
|---|---|---|
| Dépôt GitHub | Dépôt public `portfolio-olivier` | Validé |
| Projet React | Dossiers `src`, `public` et fichiers Vite | Validé |
| README | `README.md` | Validé |
| Cahier des charges P0 | `docs/P0_CAHIER_DES_CHARGES.md` | Validé |
| Validation P0 | `docs/P0_VALIDATION.md` | Validé |
| Captures d’écran | `docs/screenshots/p0/` | Validé |
| Arborescence | Capture `P0_05_project_structure.png` | Validé |
| Données initiales | `src/data/profile.js`, `projects.js`, `skills.js` | Validé |
| Pull Request P0 | Pull Request vers `main` | Validé |
| Compilation | Résultat de `npm run build` | À confirmer |

- [x] la preuve de compilation réussie.

## 22. Livrables de la phase P0

Les livrables obligatoires de la phase P0 sont :

- [x] le dépôt GitHub public du portfolio ;
- [x] le projet React fonctionnel ;
- [x] le fichier `README.md` ;
- [x] le cahier des charges P0 ;
- [x] le document de validation P0 ;
- [x] les captures d’écran de preuve ;
- [x] l’arborescence complète du projet ;
- [x] les fichiers de données initiaux ;
- [x] la Pull Request P0 ;
- [ ] la preuve de compilation réussie.

### Tableau récapitulatif

| Livrable | Emplacement ou preuve | Statut |
|---|---|---|
| Dépôt GitHub | Dépôt public `portfolio-olivier` | Validé |
| Projet React | Dossiers `src`, `public` et configuration Vite | Validé |
| README | `README.md` | Validé |
| Cahier des charges P0 | `docs/P0_CAHIER_DES_CHARGES.md` | Validé |
| Document de validation P0 | `docs/P0_VALIDATION.md` | Validé |
| Captures d’écran | `docs/screenshots/p0/` | Validé |
| Arborescence du projet | Capture `P0_05_project_structure.png` | Validé |
| Fichiers de données initiaux | `src/data/profile.js`, `projects.js`, `skills.js` | Validé |
| Pull Request P0 | Pull Request vers `main` | Validé |
| Compilation réussie | Résultat de `npm run build` | À confirmer |

## 23. Résultat attendu à la fin de P0

À la fin de la phase P0, le portfolio ne sera pas encore graphiquement terminé.

Cependant, le projet devra posséder :

- une base React propre ;
- une structure professionnelle ;
- un dépôt GitHub organisé ;
- une documentation claire ;
- une liste précise des futures fonctionnalités ;
- les données principales du profil ;
- une méthode de travail stable.

Le projet sera alors prêt pour la phase P1.