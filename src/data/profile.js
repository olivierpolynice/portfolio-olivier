const profileImage = '/images/olivier-polynice.jpg'

export const profile = {
  name: 'Olivier Polynice',

  title:
    'Étudiant en Master Réseaux, Cybersécurité et Cloud',

  shortTitle:
    'Étudiant en Master Réseaux, Cybersécurité et Cloud',

  headline:
    'Cybersécurité, Cloud, Réseaux et DevSecOps',

  specialties: [
    'Cybersécurité',
    'Cloud',
    'Réseaux',
    'DevSecOps',
  ],

  location: 'Île-de-France, France',

  availability:
    'Disponible pour une alternance en Master 2 dès septembre 2026',

  introduction:
    'Je développe mes compétences à travers des projets techniques associant sécurité des applications, administration réseau, cloud, automatisation et supervision.',

  description:
    'Étudiant en Master Réseaux, Cybersécurité et Cloud à ESTIAM Paris, je développe mes compétences à travers des projets combinant sécurité des applications, gestion des accès, administration réseau, développement web, conteneurisation, automatisation, intégration continue et supervision. Je recherche une alternance en cybersécurité, cloud ou DevSecOps pour effectuer ma cinquième année.',

  about:
    'Mon parcours associe les télécommunications, les réseaux, la cybersécurité, le cloud et le DevSecOps. Mes études, mes projets techniques et mon expérience professionnelle m’ont permis de développer des compétences techniques et humaines adaptées au travail en entreprise.',

  aboutParagraphs: [
    'Mon parcours a débuté dans les télécommunications, où j’ai acquis des bases solides en réseaux, transmission de données et fonctionnement des infrastructures.',

    'J’ai ensuite poursuivi mes études en informatique, puis en Master Réseaux, Cybersécurité et Cloud. Cette évolution m’a permis d’élargir mes compétences à la sécurité des systèmes, au développement sécurisé, à la conteneurisation, à l’automatisation et à la supervision.',

    'À travers plusieurs projets techniques, notamment AccessGuard, j’ai renforcé mon intérêt pour la gestion sécurisée des accès, la protection des applications et la mise en place d’infrastructures fiables.',

    'En parallèle de mes études, mon expérience d’équipier polyvalent chez Burger King m’a appris à travailler efficacement en équipe, à respecter des procédures précises et à rester organisé dans un environnement dynamique. Elle m’a également permis de développer ma réactivité, ma ponctualité et ma capacité à gérer la pression pendant les périodes de forte activité.',
  ],

  alternanceObjective:
    'Rejoindre une entreprise en alternance pour ma cinquième année et contribuer à des missions en cybersécurité, cloud ou DevSecOps dès septembre 2026.',

  email: 'olivierpolynice7@gmail.com',

  github: 'https://github.com/olivierpolynice',

  linkedin:
    'https://www.linkedin.com/in/olivier-polynice/',

  cv: '/cv/CV_Olivier_Polynice.pdf',

  profileImage,

  status:
    'Disponible pour une alternance en Master 2 dès septembre 2026',

  interests: [
    'Cybersécurité',
    'Cloud',
    'DevSecOps',
    'Réseaux',
    'Développement sécurisé',
  ],

  en: {
    title:
      'Master’s student in Networking, Cybersecurity and Cloud',

    shortTitle:
      'Master’s student in Networking, Cybersecurity and Cloud',

    headline:
      'Cybersecurity, Cloud, Networking and DevSecOps',

    specialties: [
      'Cybersecurity',
      'Cloud',
      'Networking',
      'DevSecOps',
    ],

    location: 'Île-de-France, France',

    availability:
      'Available for a Master’s 2 work-study program from September 2026',

    introduction:
      'I build my skills through technical projects combining application security, network administration, cloud, automation, and monitoring.',

    description:
      'A Master’s student in Networking, Cybersecurity and Cloud at ESTIAM Paris, I build my skills through projects combining application security, access management, network administration, web development, containerization, automation, continuous integration, and monitoring. I’m looking for a work-study program in cybersecurity, cloud, or DevSecOps for my fifth year.',

    about:
      'My background spans telecommunications, networking, cybersecurity, cloud, and DevSecOps. My studies, technical projects, and professional experience have helped me develop technical and interpersonal skills suited to working in a company.',

    aboutParagraphs: [
      'My background started in telecommunications, where I built a solid foundation in networking, data transmission, and how infrastructure works.',

      'I then continued my studies in computer science, followed by a Master’s in Networking, Cybersecurity and Cloud. This progression let me broaden my skills into systems security, secure development, containerization, automation, and monitoring.',

      'Through several technical projects, notably AccessGuard, I strengthened my interest in secure access management, application protection, and building reliable infrastructure.',

      'Alongside my studies, my experience as a multi-skilled crew member at Burger King taught me to work effectively as part of a team, follow precise procedures, and stay organized in a fast-paced environment. It also helped me develop my responsiveness, punctuality, and ability to handle pressure during busy periods.',
    ],

    alternanceObjective:
      'Join a company in a work-study program for my fifth year and contribute to cybersecurity, cloud, or DevSecOps work starting September 2026.',

    status:
      'Available for a Master’s 2 work-study program from September 2026',
  },
}

// Returns the profile with its French fields overridden by the
// English counterparts for the requested language. Fields without
// an English counterpart (name, contact links, cv, image…) are
// shared across both languages.
export function getLocalizedProfile(language) {
  if (language !== 'en') {
    return profile
  }

  const { en, ...base } = profile

  return { ...base, ...en }
}
