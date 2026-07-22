export const projects = [
  {
    id: 'accessguard',
    title: 'AccessGuard',
    category: 'Cybersécurité et DevSecOps',

    shortDescription:
      'Application de gestion et de gouvernance des accès internes pour une entreprise fictive.',

    description:
      'AccessGuard permet de gérer les demandes d’accès, les validations, les attributions, les révocations et les journaux d’audit à travers une architecture sécurisée. Le projet intègre une authentification JWT, un contrôle d’accès par rôles, une base de données SQLite, une interface React, une API FastAPI ainsi qu’un environnement de supervision.',

    technologies: [
      'React',
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

    image: '/projects/accessguard-cover.png',

    github:
      'https://github.com/olivierpolynice/accessguard-devsecops',

    demo: '',

    featured: true,
  },

  {
    id: 'secure-hls',
    title: 'Sécurisation vidéo HLS',
    category: 'Cybersécurité applicative',

    shortDescription:
      'Sécurisation d’un flux vidéo HLS avec chiffrement AES-128 et contrôle d’accès JWT.',

    description:
      'Ce projet protège des contenus vidéo diffusés au format HLS grâce au chiffrement AES-128. L’accès aux clés de chiffrement est contrôlé par une API sécurisée utilisant des jetons JWT à durée de vie limitée.',

    technologies: [
      'HLS',
      'AES-128',
      'JWT',
      'FastAPI',
      'FFmpeg',
      'Nginx',
      'Python',
    ],

    image: '/projects/hls-security-cover.png',

    github: '',

    demo: '',

    featured: true,
  },

  {
    id: 'pfsense-vlan',
    title: 'Infrastructure réseau pfSense',
    category: 'Réseaux et sécurité',

    shortDescription:
      'Segmentation d’une infrastructure réseau avec VLAN, DMZ et règles de pare-feu.',

    description:
      'Ce laboratoire réseau met en place plusieurs zones isolées avec pfSense, notamment une DMZ et un réseau interne. Des règles de pare-feu contrôlent les communications entre les VLAN et limitent les accès selon les besoins de sécurité.',

    technologies: [
      'pfSense',
      'VLAN',
      'DMZ',
      'Pare-feu',
      'TCP/IP',
      'Routage',
      'Segmentation réseau',
    ],

    image: '/projects/pfsense-cover.png',

    github: '',

    demo: '',

    featured: true,
  },
]