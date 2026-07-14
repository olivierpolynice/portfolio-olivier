export const projects = [
  {
    id: 'accessguard',
    title: 'AccessGuard',
    shortTitle: 'AccessGuard',
    category: 'Cybersécurité et DevSecOps',

    description:
      'Application de gestion et de gouvernance des accès internes développée pour l’entreprise fictive AsteriaTech.',

    longDescription:
      'AccessGuard permet aux employés de demander un accès à une ressource interne, aux managers de valider ou de refuser les demandes, aux administrateurs IT d’accorder ou de révoquer les accès et aux administrateurs sécurité de consulter les journaux d’audit.',

    problem:
      'Les entreprises doivent contrôler précisément les accès aux ressources sensibles et conserver une trace complète des actions effectuées.',

    solution:
      'Une application web centralisée avec authentification JWT, contrôle d’accès par rôles, journalisation des événements et supervision de l’infrastructure.',

    technologies: [
      'React',
      'JavaScript',
      'FastAPI',
      'Python',
      'JWT',
      'RBAC',
      'SQLite',
      'Docker',
      'Prometheus',
      'Grafana',
      'GitHub Actions',
    ],

    features: [
      'Authentification sécurisée avec JWT',
      'Gestion des rôles et des permissions',
      'Création de demandes d’accès',
      'Validation ou refus par un manager',
      'Attribution et révocation des accès',
      'Journalisation des événements de sécurité',
      'Tableau de bord de supervision',
      'Métriques Prometheus',
      'Visualisation avec Grafana',
      'Déploiement avec Docker',
    ],

    roles: [
      'Employee',
      'Manager',
      'IT Admin',
      'Security Admin',
    ],

    status: 'En développement',

    year: 2026,

    image: '/projects/accessguard-cover.png',

    screenshots: [
      '/projects/accessguard-login.png',
      '/projects/accessguard-dashboard.png',
      '/projects/accessguard-monitoring.png',
    ],

    github: '',

    demo: '',

    documentation: '',

    featured: true,
  },

  {
    id: 'secure-hls-streaming',
    title: 'Secure HLS Streaming',
    shortTitle: 'Secure HLS',
    category: 'Cybersécurité multimédia',

    description:
      'Solution de diffusion vidéo HLS sécurisée avec chiffrement AES-128 et contrôle d’accès par JWT.',

    longDescription:
      'Ce projet protège une diffusion vidéo HLS grâce au chiffrement AES-128. La clé de déchiffrement est accessible uniquement aux utilisateurs authentifiés disposant d’un jeton JWT valide.',

    problem:
      'Une diffusion vidéo classique peut être copiée ou consultée par un utilisateur non autorisé lorsque les segments et les clés sont exposés publiquement.',

    solution:
      'Chiffrer les segments vidéo, protéger la clé AES-128 derrière une API authentifiée et utiliser Nginx pour distribuer les fichiers HLS sans exposer les secrets.',

    technologies: [
      'HLS',
      'AES-128',
      'JWT',
      'FastAPI',
      'Nginx',
      'FFmpeg',
      'Docker',
      'PowerShell',
    ],

    features: [
      'Génération automatique d’une clé AES-128',
      'Conversion vidéo au format HLS',
      'Chiffrement des segments vidéo',
      'Protection de la clé par authentification JWT',
      'Durée de validité limitée du jeton',
      'Limitation du nombre de requêtes',
      'Distribution des fichiers avec Nginx',
    ],

    roles: [
      'Cybersecurity Engineer',
      'Backend Developer',
    ],

    status: 'Prototype fonctionnel',

    year: 2026,

    image: '/projects/secure-hls-cover.png',

    screenshots: [],

    github: '',

    demo: '',

    documentation: '',

    featured: true,
  },

  {
    id: 'pfsense-network-security',
    title: 'Architecture réseau sécurisée avec pfSense',
    shortTitle: 'pfSense Security Lab',
    category: 'Réseaux et sécurité',

    description:
      'Architecture réseau segmentée avec VLAN, règles de pare-feu et contrôle des communications entre zones.',

    longDescription:
      'Laboratoire réseau permettant de segmenter une infrastructure en plusieurs zones de sécurité, notamment une DMZ, un réseau interne et une zone d’audit.',

    problem:
      'Un réseau non segmenté permet à un attaquant de se déplacer plus facilement entre les machines et les services internes.',

    solution:
      'Séparer les équipements dans différents VLAN et appliquer des règles de pare-feu précises avec pfSense.',

    technologies: [
      'pfSense',
      'VLAN',
      'Firewall',
      'TCP/IP',
      'Kali Linux',
      'Wireshark',
      'Nmap',
    ],

    features: [
      'Création de plusieurs VLAN',
      'Segmentation du réseau',
      'Configuration d’une DMZ',
      'Filtrage HTTP et HTTPS',
      'Blocage des communications non autorisées',
      'Tests réseau avec Kali Linux',
      'Analyse du trafic avec Wireshark',
    ],

    roles: [
      'Network Administrator',
      'Cybersecurity Analyst',
    ],

    status: 'Terminé',

    year: 2026,

    image: '/projects/pfsense-cover.png',

    screenshots: [],

    github: '',

    demo: '',

    documentation: '',

    featured: true,
  },
]