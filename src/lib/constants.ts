import type { Site, Page, Project, Logo } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/GusLV12/',
  linkedin: 'https://www.linkedin.com/in/gustavo-linares-villegas-5a39a325a/',
  mail: 'mailto:guslinaresv@gmail.com',
  instagram: 'https://www.instagram.com/ancap.tattoo/',
  medium: '#',
  discord: '#',
}

// Global
export const SITE: Site = {
  TITLE: 'Astro Sphere',
  DESCRIPTION:
    'Welcome to Astro Sphere, a portfolio and blog for designers and developers.',
  AUTHOR: 'Mark Horn',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const STUDIES = [
  {
    title: '...',
    institution: 'Udemy',
    link: 'https://www.udemy.com/',
    date: '2018 - 2022',
  },
  {
    title: '...',
    institution: 'Youtube',
    link: 'https://www.youtube.com/@midulive',
    date: '2018 - 2022',
  },
  {
    title: '...',
    institution: 'ESCOM',
    link: 'https://www.escom.ipn.mx/',
    date: '2024 - 2025',
  },
]

export const EXPERIENCE = [
  {
    company: 'WebDECero',
    location: 'CDMX, México',
    position: 'Software Engineer, Frontend',
    start: '2024',
    link: 'https://straico.https://www.webdecero.com/',
    end: 'present',
    tasks: [
      'Development internal platform with the use of React, Redux, and Material UI',
      'Development of pages for various clients using React, Redux and Material UI',
      'Testing and debugging',
    ],
  },
]

// Projects List
export const projects: Project[] = [
  {
    name: 'Buscador de imagenes.',
    img: '/public/images/Buscador de imagenes.png',
    repositorio: 'https://github.com/example/project-one',
    description: 'Buscador de imagenes creado con React y consumiendo servicios de unplash.',
  },
  {
    name: 'Interfaz.',
    img: '/public/images/Interfaz-Java.png',
    repositorio: 'https://github.com/example/project-two',
    description: 'Interfaz creada con Java, permite registrar nombre y edad y colocarla en una base de datos.',
  },
  {
    id: '2',
    name: 'Calculadora.',
    img: '/public/images/Calculadora.png',
    repositorio: 'https://github.com/example/project-two',
    description: 'Creada con React.',
  },
  {
    id: '2',
    name: 'Snake Game',
    img: '/public/images/Snake retro.png',
    repositorio: 'https://github.com/example/project-two',
    description: 'Juego retro snake.',
  },
  {
    id: '2',
    name: 'Generador de contraseñas.',
    img: '/public/images/Generador_pass.png',
    repositorio: 'https://github.com/example/project-two',
    description: 'Generadro de contraseñas con diferentes caracteres.',
  },
  {
    id: '2',
    name: 'To do.',
    img: '/public/images/MisTareas.png',
    repositorio: 'https://github.com/example/project-two',
    description: 'Un creador de tareas usando la librería reduxToolkit.',
  },
  {
    id: '2',
    name: 'Reloj',
    img: '/public/images/Reloj.png',
    repositorio: 'https://github.com/example/project-two',
    description: 'Reloj que muestra la hora de México, creado con vanilla Javascript',
  },
  
];

export const languages: Logo[] = [
  {
    logo: 'public/languages/c++.svg'
  },
  {
    logo: 'public/languages/c.svg'
  },
  {
    logo: 'public/languages/css.svg'
  },
  {
    logo: 'public/languages/html5.svg'
  },
  {
    logo: 'public/languages/javascript.svg'
  },
  {
    logo: 'public/languages/java.svg'
  },
  {
    logo: 'public/languages/mongodb.svg'
  },
  {
    logo: 'public/languages/mysql.svg'
  },
  {
    logo: 'public/languages/postgresql.svg'
  },
  {
    logo: 'public/languages/python.svg'
  },
  {
    logo: 'public/languages/icons8-react.svg'
  },
  {
    logo: 'public/languages/icons8-nextjs.svg'
  },
  {
    logo: 'public/languages/icons8-google-cloud.svg'
  },
];

export const tools: Logo[] = [
  {
    logo: 'public/tools/git.svg'
  },
  {
    logo: 'public/tools/github.svg'
  },
  {
    logo: 'public/tools/linux.svg'
  },
  {
    logo: 'public/tools/visual-studio.svg'
  },
  {
    logo: 'public/tools/vscode.svg'
  },
  {
    logo: 'public/tools/windows.svg'
  },
  {
    logo: 'public/tools/icons8-figma.svg'
  },
  {
    logo: 'public/tools/icons8-webflow.svg'
  },
  {
    logo: 'public/tools/wordpress.svg'
  },
];
