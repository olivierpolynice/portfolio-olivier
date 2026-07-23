export const projects = [
  {
    id: 'accessguard',
    title: 'AccessGuard',
    category: 'Cybersécurité et DevSecOps',
    filterCategory: 'Cybersécurité',
    status: 'Terminé',

    shortDescription:
      'Plateforme de gestion sécurisée des demandes et des droits d’accès au sein d’une entreprise fictive.',

    description:
      'AccessGuard centralise la gestion des demandes d’accès, leur validation, l’attribution des droits et la traçabilité des actions dans une architecture sécurisée et supervisée.',

    context:
      'AccessGuard a été développé dans le cadre d’un projet pédagogique réalisé en équipe. Le projet représente le système interne d’une entreprise fictive, AsteriaTech, qui souhaite mieux contrôler les accès de ses collaborateurs à ses applications et infrastructures.',

    problem:
      'Dans une entreprise, les droits d’accès peuvent devenir difficiles à contrôler lorsqu’ils sont attribués manuellement et sans suivi centralisé. AccessGuard répond à ce problème avec un processus sécurisé, structuré et traçable.',

    objectives: [
      'Centraliser les demandes de droits d’accès',
      'Appliquer une séparation claire des responsabilités',
      'Sécuriser les connexions et les autorisations',
      'Conserver une trace des actions sensibles',
      'Superviser le fonctionnement de l’application',
      'Automatiser les tests et les contrôles de qualité',
    ],

    role:
      'Lead technique — conception de l’architecture, développement, intégration des fonctionnalités, coordination technique et validation finale.',

    architecture:
      'AccessGuard repose sur une interface React communiquant avec une API FastAPI. Les données sont enregistrées dans SQLite. L’authentification utilise des jetons JWT et les autorisations sont contrôlées avec un modèle RBAC. L’application est conteneurisée avec Docker, supervisée avec Prometheus et Grafana, puis contrôlée automatiquement avec GitHub Actions.',

    features: [
      'Authentification sécurisée avec JWT',
      'Contrôle d’accès basé sur les rôles avec RBAC',
      'Création et suivi des demandes d’accès',
      'Validation ou refus par les managers',
      'Attribution et révocation des droits',
      'Gestion sécurisée des utilisateurs',
      'Journalisation et traçabilité des actions',
      'Supervision avec Prometheus et Grafana',
      'Tests automatisés et intégration continue',
    ],

    difficulties: [
      'Mettre en place une gestion cohérente des rôles et des autorisations',
      'Synchroniser les différents états d’une demande d’accès',
      'Sécuriser les routes sensibles de l’API',
      'Intégrer le frontend, le backend et les services de supervision',
      'Coordonner les contributions réalisées en équipe',
    ],

    solutions: [
      'Création de quatre rôles avec des permissions précises',
      'Mise en place d’un workflow structuré pour les demandes',
      'Protection des routes avec JWT et contrôle RBAC',
      'Conteneurisation des services avec Docker Compose',
      'Ajout de tests automatisés et de workflows GitHub Actions',
      'Validation des contributions avant leur intégration dans la branche principale',
    ],

    results: [
      'Plateforme fonctionnelle de gestion des accès',
      'Authentification et autorisations sécurisées',
      'Traçabilité des opérations importantes',
      'Administration sécurisée des utilisateurs',
      'Supervision avec Prometheus et Grafana',
      'Tests automatisés intégrés au processus CI/CD',
      'Interface adaptée aux différents rôles utilisateurs',
    ],

    technologies: [
      'FastAPI',
      'React',
      'Python',
      'SQLite',
      'Docker',
      'JWT',
      'RBAC',
      'Prometheus',
      'Grafana',
      'GitHub Actions',
      'CI/CD',
      'Git',
    ],

    image: '/projects/accessguard-cover.png',

    screenshots: [],

    github:
      'https://github.com/olivierpolynice/accessguard-devsecops',

    demo: '',

    featured: true,
  },

  {
    id: 'linux-server-security',
    title: 'Sécurisation d’un serveur Linux',
    category: 'Cybersécurité et systèmes',
    filterCategory: 'Cybersécurité',
    status: 'Terminé',

    shortDescription:
      'Laboratoire de sécurisation d’un serveur Ubuntu avec SSH, UFW, Fail2ban et analyse des journaux.',

    description:
      'Ce laboratoire met en œuvre plusieurs mesures de durcissement d’un serveur Linux : sécurisation des connexions SSH, configuration du pare-feu UFW, protection contre les tentatives de connexion avec Fail2ban, analyse des logs et application du principe du moindre privilège.',

    context:
      'Ce projet a été réalisé pour approfondir la sécurisation et l’administration d’un serveur Linux exposé à différents risques.',

    problem:
      'Un serveur conservant sa configuration par défaut peut présenter des services inutiles, des accès trop permissifs et une protection insuffisante contre les tentatives de connexion répétées.',

    objectives: [
      'Sécuriser l’accès distant avec SSH',
      'Limiter les ports ouverts avec UFW',
      'Bloquer les tentatives de connexion répétées',
      'Analyser les journaux du système',
      'Appliquer le principe du moindre privilège',
    ],

    role:
      'Réalisation individuelle du laboratoire, configuration du serveur, tests de sécurité et documentation des étapes.',

    architecture:
      'Le laboratoire repose sur un serveur Ubuntu protégé par le pare-feu UFW. Les connexions distantes utilisent SSH et Fail2ban analyse les journaux afin de bloquer les comportements suspects.',

    features: [
      'Configuration sécurisée de SSH',
      'Mise en place du pare-feu UFW',
      'Protection avec Fail2ban',
      'Analyse des journaux système',
      'Gestion des utilisateurs et des permissions',
    ],

    difficulties: [
      'Éviter de bloquer les accès administratifs légitimes',
      'Configurer correctement les règles du pare-feu',
      'Identifier les événements importants dans les logs',
    ],

    solutions: [
      'Test progressif des règles avant leur application définitive',
      'Conservation d’un accès administratif sécurisé',
      'Utilisation des journaux pour vérifier les blocages',
    ],

    results: [
      'Serveur mieux protégé contre les accès non autorisés',
      'Réduction de la surface d’exposition',
      'Détection et blocage des tentatives répétées',
    ],

    technologies: [
      'Linux',
      'Ubuntu Server',
      'SSH',
      'UFW',
      'Fail2ban',
      'Analyse de logs',
      'Bash',
    ],

    image: '/projects/linux-server-security-cover.png',

    screenshots: [],

    github:
      'https://github.com/olivierpolynice/linux-server-security-lab',

    demo: '',

    featured: false,
  },

  {
    id: 'dataops-airflow-dbt',
    title: 'Pipeline DataOps avec Airflow et dbt',
    category: 'Data et automatisation',
    filterCategory: 'Data',
    status: 'Terminé',

    shortDescription:
      'Pipeline DataOps réalisé avec Apache Airflow, dbt, SQLite et Azurite pour orchestrer et transformer des données.',

    description:
      'Ce projet DataOps regroupe plusieurs travaux pratiques consacrés à l’orchestration de pipelines, à la transformation des données et à leur stockage. Apache Airflow pilote les traitements tandis que dbt organise les transformations et les validations.',

    context:
      'Ce projet académique a permis de découvrir les principales étapes d’un pipeline de données et les outils utilisés pour automatiser leur traitement.',

    problem:
      'Le traitement manuel des données est difficile à reproduire, à contrôler et à maintenir lorsque le nombre d’étapes augmente.',

    objectives: [
      'Automatiser l’exécution des traitements',
      'Orchestrer les tâches avec Apache Airflow',
      'Transformer et valider les données avec dbt',
      'Stocker les résultats dans une base SQLite',
      'Documenter le fonctionnement du pipeline',
    ],

    role:
      'Développement des traitements, configuration des workflows et validation du pipeline de données.',

    architecture:
      'Apache Airflow orchestre les différentes tâches du pipeline. dbt applique les transformations SQL et les données sont stockées dans SQLite. Azurite simule un service de stockage compatible avec Azure.',

    features: [
      'Orchestration des tâches',
      'Planification des traitements',
      'Transformation des données',
      'Validation des modèles',
      'Stockage des résultats',
    ],

    difficulties: [
      'Organiser les dépendances entre les tâches',
      'Configurer les différents services',
      'Garantir la cohérence des transformations',
    ],

    solutions: [
      'Découpage du pipeline en tâches indépendantes',
      'Utilisation de DAG pour définir les dépendances',
      'Ajout de validations dans les modèles dbt',
    ],

    results: [
      'Pipeline reproductible et automatisé',
      'Transformations structurées avec dbt',
      'Meilleure compréhension des pratiques DataOps',
    ],

    technologies: [
      'Python',
      'Apache Airflow',
      'dbt',
      'SQLite',
      'Azurite',
      'SQL',
      'DataOps',
    ],

    image: '/projects/airflow-dbt-cover.png',

    screenshots: [],

    github:
      'https://github.com/olivierpolynice/dataops-airflow-dbt-tp1-6',

    demo: '',

    featured: false,
  },

  {
    id: 'tcp-ip-osi-wireshark',
    title: 'Analyse réseau TCP/IP et OSI',
    category: 'Réseaux',
    filterCategory: 'Réseaux',
    status: 'Terminé',

    shortDescription:
      'Laboratoire d’analyse des protocoles réseau et des communications avec Wireshark.',

    description:
      'Ce laboratoire permet d’étudier le fonctionnement des modèles TCP/IP et OSI à travers la capture et l’analyse de paquets réseau. Il met en évidence les protocoles, les ports, les adresses et les différentes couches de communication.',

    context:
      'Ce laboratoire a été réalisé pour appliquer les notions théoriques des modèles TCP/IP et OSI à des communications réseau réelles.',

    problem:
      'Les échanges réseau sont difficiles à comprendre sans outil permettant d’observer les paquets et les protocoles utilisés.',

    objectives: [
      'Capturer des paquets réseau',
      'Identifier les principaux protocoles',
      'Comprendre les modèles TCP/IP et OSI',
      'Analyser les adresses et les ports',
      'Repérer les échanges DNS et DHCP',
    ],

    role:
      'Réalisation des captures réseau, analyse des paquets et documentation des observations.',

    architecture:
      'Wireshark capture les communications passant par l’interface réseau. Des filtres permettent ensuite d’isoler et d’étudier les protocoles utilisés à chaque couche.',

    features: [
      'Capture du trafic réseau',
      'Filtrage des paquets',
      'Analyse des protocoles',
      'Identification des ports',
      'Étude des échanges DNS et DHCP',
    ],

    difficulties: [
      'Identifier les paquets réellement pertinents',
      'Associer les protocoles aux couches correspondantes',
      'Comprendre l’enchaînement des communications',
    ],

    solutions: [
      'Utilisation de filtres Wireshark précis',
      'Analyse progressive des différentes couches',
      'Documentation des échanges observés',
    ],

    results: [
      'Meilleure compréhension des communications réseau',
      'Maîtrise des filtres principaux de Wireshark',
      'Identification des protocoles et des ports',
    ],

    technologies: [
      'Wireshark',
      'TCP/IP',
      'Modèle OSI',
      'DNS',
      'DHCP',
      'Analyse de paquets',
      'Réseaux',
    ],

    image: '/projects/wireshark-cover.png',

    screenshots: [],

    github:
      'https://github.com/olivierpolynice/lab-tcp-ip-osi-wireshark',

    demo: '',

    featured: false,
  },

  {
    id: 'sentiment-ai',
    title: 'Sentiment AI',
    category: 'Intelligence artificielle',
    filterCategory: 'Développement',
    status: 'En développement',

    shortDescription:
      'Application Python consacrée à l’analyse automatique du sentiment exprimé dans un texte.',

    description:
      'Sentiment AI explore l’analyse de texte et la classification des émotions ou opinions. Le projet permet de mettre en pratique Python, le traitement des données textuelles et l’intégration d’un modèle d’analyse de sentiments.',

    context:
      'Ce projet personnel explore l’utilisation de Python et de modèles d’analyse de texte dans une application simple.',

    problem:
      'L’analyse manuelle d’un grand nombre de commentaires prend du temps et ne permet pas facilement d’obtenir une tendance générale.',

    objectives: [
      'Analyser automatiquement un texte',
      'Identifier son sentiment général',
      'Préparer et nettoyer les données textuelles',
      'Présenter clairement le résultat',
    ],

    role:
      'Conception et développement individuel de l’application.',

    architecture:
      'L’application reçoit un texte, prépare son contenu puis utilise un modèle d’analyse afin de déterminer le sentiment exprimé.',

    features: [
      'Saisie d’un texte',
      'Préparation du contenu',
      'Analyse du sentiment',
      'Affichage du résultat',
    ],

    difficulties: [
      'Préparer correctement les données textuelles',
      'Interpréter les résultats du modèle',
      'Gérer les textes ambigus',
    ],

    solutions: [
      'Nettoyage du texte avant son analyse',
      'Structuration progressive du traitement',
      'Tests avec plusieurs exemples de phrases',
    ],

    results: [
      'Première version fonctionnelle de l’analyse',
      'Application des bases du traitement de texte',
      'Projet toujours en cours d’amélioration',
    ],

    technologies: [
      'Python',
      'Intelligence artificielle',
      'Analyse de sentiments',
      'Traitement de texte',
    ],

    image: '/projects/sentiment-ai-cover.png',

    screenshots: [],

    github:
      'https://github.com/olivierpolynice/sentiment-ai',

    demo: '',

    featured: false,
  },

  {
    id: 'linux-bandit',
    title: 'Laboratoire Linux et Bandit',
    category: 'Systèmes et cybersécurité',
    filterCategory: 'Cybersécurité',
    status: 'Terminé',

    shortDescription:
      'Apprentissage pratique des commandes Linux et résolution des niveaux 0 à 10 d’OverTheWire Bandit.',

    description:
      'Ce laboratoire documente les commandes essentielles de Linux et leur utilisation dans les premiers niveaux du challenge OverTheWire Bandit. Il développe la maîtrise du terminal, de SSH, des permissions et de la recherche de fichiers.',

    context:
      'Ce laboratoire a été réalisé pour renforcer la maîtrise du terminal Linux à travers des exercices pratiques de cybersécurité.',

    problem:
      'La compréhension de Linux nécessite une pratique régulière des commandes, des permissions, de SSH et de la manipulation des fichiers.',

    objectives: [
      'Maîtriser les commandes Linux essentielles',
      'Utiliser SSH pour accéder à un serveur distant',
      'Comprendre les permissions des fichiers',
      'Rechercher des informations dans le système',
      'Résoudre les niveaux 0 à 10 de Bandit',
    ],

    role:
      'Résolution individuelle des exercices et rédaction de la documentation technique.',

    architecture:
      'Les exercices sont réalisés à distance sur les serveurs OverTheWire grâce à SSH. Chaque niveau nécessite l’utilisation de commandes Linux pour retrouver le mot de passe suivant.',

    features: [
      'Connexion distante avec SSH',
      'Navigation dans le système de fichiers',
      'Recherche de fichiers',
      'Lecture et filtrage de contenu',
      'Gestion des permissions',
    ],

    difficulties: [
      'Identifier la commande adaptée à chaque niveau',
      'Comprendre les permissions Linux',
      'Rechercher des fichiers selon plusieurs critères',
    ],

    solutions: [
      'Consultation de la documentation des commandes',
      'Décomposition des problèmes en étapes',
      'Documentation des solutions retenues',
    ],

    results: [
      'Résolution des niveaux 0 à 10',
      'Meilleure maîtrise du terminal Linux',
      'Progression dans l’utilisation de SSH et des permissions',
    ],

    technologies: [
      'Linux',
      'Bash',
      'SSH',
      'OverTheWire',
      'Permissions',
      'Commandes système',
    ],

    image: '/projects/bandit-cover.png',

    screenshots: [],

    github:
      'https://github.com/olivierpolynice/lab-linux-systeme-bandit',

    demo: '',

    featured: false,
  },
]