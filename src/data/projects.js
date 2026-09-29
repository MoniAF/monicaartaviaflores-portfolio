import bloomLogo from '@/assets/img/bloomrecipes.svg'
import poppyLogo from '@/assets/img/poppycatsitter.png'
import bretLogo from '@/assets/img/bret.svg'
import hotelLogo from '@/assets/img/hotelbeach.svg'
import communityArt from '@/assets/img/flowers3.svg'

export const projects = [
  {
    slug: 'bloomrecipes',
    title: 'Bloom Recipes Remastered',
    category: 'Web',
    eyebrow: 'Full stack · Original & remastered',
    role: 'Full Stack Developer',
    period: 'April – June 2023 · Remastered in 2026',
    featured: true,
    logo: bloomLogo,
    logoAlt: 'Bloom Recipes project logo',
    summary: 'A recipe platform to explore, filter and save ideas for your next meal.',
    description:
      'An academic recipe platform revisited to improve its data quality, functionality and user experience. The remastered version connects a Vue frontend to a Laravel REST API and includes an administration interface for managing recipe content.',
    technologies: [
      'Vue 3',
      'Vite',
      'Pinia',
      'Vue Router',
      'Bootstrap',
      'SCSS',
      'Laravel',
      'REST API',
      'MariaDB',
      'Axios'
    ],
    contributions: [
      'Recipe search and filters by category, occasion and difficulty.',
      'Recipe details, related recipes, likes and saved favorites.',
      'Administration tools to manage recipes and their publication status.',
      'Database cleanup and a reorganized frontend with reusable components.',
      'Authentication and frontend/backend integration using Axios.',
      'Deployment of the application, API and cloud database for an end-to-end production environment.'
    ],
    evolution:
      'The original 2023 frontend used Vue through a CDN. The remaster introduces Vite, Pinia and Vue Router, updates the interface and improves the existing data.',
    links: [
      { label: 'Live demo', url: 'https://bloomrecipes.vercel.app/' },
      { label: 'Remastered repository', url: 'https://github.com/MoniAF/BloomRecipesRemastered' },
      { label: 'Original repository', url: 'https://github.com/MoniAF/BloomRecipesWebsite' }
    ],
    note: 'The demo uses free hosting and may take a moment to load. Recipe images include AI-generated illustrations.',
    screenshots: [
      {
        src: '/images/projects/bloomrecipes/home.png',
        alt: 'Bloom Recipes home page',
        caption: 'Homepage and recipe discovery'
      },
      {
        src: '/images/projects/bloomrecipes/recipes.png',
        alt: 'Bloom Recipes recipe cards',
        caption: 'Recipe catalog'
      },
      {
        src: '/images/projects/bloomrecipes/details.png',
        alt: 'Bloom Recipes recipe details',
        caption: 'Recipe details'
      },
      {
        src: '/images/projects/bloomrecipes/details-info.png',
        alt: 'Bloom Recipes recipe details and information',
        caption: 'Recipe information'
      },
      {
        src: '/images/projects/bloomrecipes/instructions.png',
        alt: 'Bloom Recipes preparation instructions',
        caption: 'Preparation instructions'
      },
      {
        src: '/images/projects/bloomrecipes/favorites.png',
        alt: 'Bloom Recipes saved recipes',
        caption: 'Saved recipes'
      },
      {
        src: '/images/projects/bloomrecipes/trending.png',
        alt: 'Bloom Recipes trending recipes',
        caption: 'Trending recipes'
      },
      {
        src: '/images/projects/bloomrecipes/newest.png',
        alt: 'Bloom Recipes newest recipes',
        caption: 'Newest recipes'
      },
      {
        src: '/images/projects/bloomrecipes/gallery.png',
        alt: 'Bloom Recipes recipe gallery',
        caption: 'Recipe gallery'
      },
      {
        src: '/images/projects/bloomrecipes/about.png',
        alt: 'Bloom Recipes about page',
        caption: 'About the project'
      },
      {
        src: '/images/projects/bloomrecipes/menu.png',
        alt: 'Bloom Recipes navigation menu',
        caption: 'Navigation menu'
      },
      {
        src: '/images/projects/bloomrecipes/footer-home.png',
        alt: 'Bloom Recipes home page footer',
        caption: 'Homepage footer'
      },
      {
        src: '/images/projects/bloomrecipes/details-related.png',
        alt: 'Bloom Recipes related recipes section',
        caption: 'Related recipes'
      },
      {
        src: '/images/projects/bloomrecipes/signup.png',
        alt: 'Bloom Recipes account registration screen',
        caption: 'Create an account'
      },
      {
        src: '/images/projects/bloomrecipes/login.png',
        alt: 'Bloom Recipes sign-in screen',
        caption: 'Sign in'
      },
      {
        src: '/images/projects/bloomrecipes/search.png',
        alt: 'Bloom Recipes search results',
        caption: 'Search and filtering'
      },
      {
        src: '/images/projects/bloomrecipes/profile.png',
        alt: 'Bloom Recipes signed-in profile and sign-out option',
        caption: 'Signed-in profile'
      },
      {
        src: '/images/projects/bloomrecipes/hero-message.png',
        alt: 'Bloom Recipes welcome message card',
        caption: 'Welcome message'
      },
    ]
  },
  {
    slug: 'hotelbeach',
    title: 'Hotel Beach SA Remastered',
    category: 'Web',
    eyebrow: 'Full stack · Hotel management',
    role: '.NET Developer',
    period: 'January – February 2024 · Remastered in 2026',
    logo: hotelLogo,
    logoAlt: 'Hotel Beach project logo',
    summary: 'A hotel application connecting an ASP.NET MVC interface, a REST API and SQL Server.',
    description:
      'A full stack hotel project with separate web and API layers. It brings together customer, employee, package and reservation data, with role-based access for administrators, employees and customers.',
    technologies: ['C#', 'ASP.NET Core MVC', '.NET 8', 'REST API', 'SQL Server'],
    contributions: [
      'An MVC web application connected to an ASP.NET Core Web API.',
      'Cookie authentication for the web application and JWT authentication for the API.',
      'Access control for administrator, employee and customer roles.',
      'Relational data for hotel packages, reservations, customers and employees.',
      'Improved application structure, naming and deployment configuration.',
      'Improved database integration and end-to-end communication between the web app, API and database.'
    ],
    links: [
      { label: 'Live demo', url: 'https://hotelbeach.somee.com/' },
      { label: 'Remastered repository', url: 'https://github.com/MoniAF/HotelBeachRemastered' },
      { label: 'Original repository', url: 'https://github.com/MoniAF/HotelBeach.NET' }
    ],
    screenshots: [
      {
        src: '/images/projects/hotelbeach/home.png',
        alt: 'Hotel Beach public home page',
        caption: 'Public home page'
      },
      {
        src: '/images/projects/hotelbeach/home-alternate.png',
        alt: 'Hotel Beach alternate public home page view',
        caption: 'Homepage view'
      },
      {
        src: '/images/projects/hotelbeach/packages.png',
        alt: 'Hotel Beach packages page',
        caption: 'Available packages'
      },
      {
        src: '/images/projects/hotelbeach/home-footer.png',
        alt: 'Hotel Beach home page footer',
        caption: 'Homepage footer'
      },
      {
        src: '/images/projects/hotelbeach/about.png',
        alt: 'Hotel Beach about page',
        caption: 'About the hotel'
      },
      {
        src: '/images/projects/hotelbeach/about-details.png',
        alt: 'Hotel Beach additional about page view',
        caption: 'About page details'
      },
      {
        src: '/images/projects/hotelbeach/about-footer.png',
        alt: 'Hotel Beach about page footer',
        caption: 'About page footer'
      },
      {
        src: '/images/projects/hotelbeach/customer-login.png',
        alt: 'Hotel Beach customer login',
        caption: 'Customer login'
      },
      {
        src: '/images/projects/hotelbeach/customer-register.png',
        alt: 'Hotel Beach customer registration',
        caption: 'Customer registration'
      },
      {
        src: '/images/projects/hotelbeach/customer-register-details.png',
        alt: 'Hotel Beach customer registration form details',
        caption: 'Registration form'
      },
      {
        src: '/images/projects/hotelbeach/staff-login.png',
        alt: 'Hotel Beach staff login',
        caption: 'Staff login'
      },
      {
        src: '/images/projects/hotelbeach/home-signed-in.png',
        alt: 'Hotel Beach home page with a signed-in user',
        caption: 'Signed-in homepage'
      },
      {
        src: '/images/projects/hotelbeach/reservations.png',
        alt: 'Hotel Beach reservations page',
        caption: 'Reservation management'
      },
      {
        src: '/images/projects/hotelbeach/employees.png',
        alt: 'Hotel Beach employees administration',
        caption: 'Employee administration'
      },
      {
        src: '/images/projects/hotelbeach/customers.png',
        alt: 'Hotel Beach customers administration',
        caption: 'Customer administration'
      },
      {
        src: '/images/projects/hotelbeach/packages-admin.png',
        alt: 'Hotel Beach package administration',
        caption: 'Package administration'
      },
    ]
  },
  {
    slug: 'poppycatsitter',
    title: 'Poppy Cat Sitter Videogame',
    category: 'Java',
    eyebrow: 'Java · Academic game',
    role: 'Java Developer',
    period: 'April – June 2022',
    logo: poppyLogo,
    logoAlt: 'Poppy Cat Sitter project artwork',
    summary:
      'A Java desktop videogame with object-oriented gameplay and JSON-based save and load functionality.',
    description:
      'A desktop videogame developed using object-oriented programming principles. It combines core gameplay logic, player interactions and reusable application components with persistence for game progress and player data.',
    technologies: ['Java', 'Object-oriented programming', 'JSON'],
    contributions: [
      'Implemented core gameplay logic, player interactions and reusable application components.',
      'Implemented JSON-based persistence to store and retrieve game progress and player data, supporting save and load functionality.'
    ],
    links: [{ label: 'Repository', url: 'https://github.com/MoniAF/PoppyCatSitter' }],
    screenshots: [
      {
        src: '/images/projects/poppycatsitter/start.png',
        alt: 'Poppy Cat Sitter start screen',
        caption: 'Start screen'
      },
      {
        src: '/images/projects/poppycatsitter/menu.png',
        alt: 'Poppy Cat Sitter game menu',
        caption: 'Game menu'
      },
      {
        src: '/images/projects/poppycatsitter/instructions.png',
        alt: 'Poppy Cat Sitter instructions',
        caption: 'Instructions'
      },
      {
        src: '/images/projects/poppycatsitter/yellow-cat.png',
        alt: 'Poppy Cat Sitter character selection',
        caption: 'Character selection'
      },
      {
        src: '/images/projects/poppycatsitter/gray-cat.png',
        alt: 'Poppy Cat Sitter alternate character selection',
        caption: 'Alternate character'
      },
      {
        src: '/images/projects/poppycatsitter/gameplay.png',
        alt: 'Poppy Cat Sitter gameplay',
        caption: 'Gameplay'
      },
      {
        src: '/images/projects/poppycatsitter/gameplay-screen-one.png',
        alt: 'Poppy Cat Sitter gameplay screen',
        caption: 'Gameplay screen'
      },
      {
        src: '/images/projects/poppycatsitter/store.png',
        alt: 'Poppy Cat Sitter store',
        caption: 'In-game store'
      },
      {
        src: '/images/projects/poppycatsitter/experience.png',
        alt: 'Poppy Cat Sitter experience screen',
        caption: 'Experience progression'
      },
      {
        src: '/images/projects/poppycatsitter/gameplay-screen-two.png',
        alt: 'Poppy Cat Sitter alternate gameplay screen',
        caption: 'Alternate gameplay screen'
      },
      {
        src: '/images/projects/poppycatsitter/night-scene.png',
        alt: 'Poppy Cat Sitter nighttime game scene',
        caption: 'Nighttime scene'
      },
      {
        src: '/images/projects/poppycatsitter/sleeping-cat.png',
        alt: 'Poppy Cat Sitter sleeping cat game scene',
        caption: 'Sleeping cat scene'
      },
    ]
  },
  {
    slug: 'bret',
    title: 'BreT Database Management',
    category: 'Databases',
    eyebrow: 'Oracle · Academic database project',
    role: 'Oracle DBA',
    period: 'August – November 2023',
    logo: bretLogo,
    logoAlt: 'Bre-T project logo',
    summary:
      'An Oracle database project focused on automated database logic, data integrity and SQL performance.',
    description:
      'An academic Oracle database project involving stored procedures, triggers and functions to automate database logic and support data integrity, alongside query, indexing and database structure improvements.',
    technologies: ['Oracle', 'SQL', 'Stored procedures', 'Triggers', 'Functions', 'Indexing'],
    contributions: [
      'Developed stored procedures, triggers and functions in Oracle to automate database logic and support data integrity.',
      'Optimized SQL queries, indexing and database structures to improve performance and maintainability.'
    ],
    links: [{ label: 'Repository', url: 'https://github.com/MoniAF/Bre-T-Database' }],
    screenshots: [
      {
        src: '/images/projects/bret/schema.png',
        alt: 'BreT Oracle database relational schema',
        caption: 'Relational schema reconstructed from the Oracle SQL scripts'
      }
    ]
  },
  {
    slug: 'tcu',
    title: 'Community Digital Support',
    category: 'Community',
    eyebrow: 'University TCU · Digital communication',
    role: 'Community Digital Support',
    period: 'September 2023 – July 2024',
    logo: communityArt,
    logoAlt: 'Decorative floral illustration',
    summary:
      'Digital materials and online presence support for community and small-business initiatives.',
    description:
      'Through the University of Costa Rica’s community service program (TCU), I supported community and small-business initiatives with digital content and visual design.',
    technologies: ['Visual design', 'Web content', 'Digital communication'],
    contributions: [
      'Organized website content and supported the development of an online presence across web and social platforms.',
      'Collaborated on digital materials and online profiles aimed at improving visibility and accessibility for local ventures.'
    ],
    links: [{ label: 'Vistas del Encanto Website', url: 'https://sites.google.com/view/vistas-del-encanto?usp=sharing' }],
    screenshots: [
      {
        src: '/images/projects/tcu/ucr-logo.jpg',
        alt: 'Mandala Creaciones profile image',
        caption: 'Mandala Creaciones · Profile identity'
      },
      {
        src: '/images/projects/tcu/mandala-cover.png',
        alt: 'Mandala Creaciones Facebook cover',
        caption: 'Mandala Creaciones · Cover design'
      },
      {
        src: '/images/projects/tcu/mandala-profile.png',
        alt: 'Mandala Creaciones profile image',
        caption: 'Mandala Creaciones · Profile identity'
      },
      {
        src: '/images/projects/tcu/mandala-post.png',
        alt: 'Mandala Creaciones social media post',
        caption: 'Mandala Creaciones · Digital content'
      },
      {
        src: '/images/projects/tcu/mandala-post-two.png',
        alt: 'Mandala Creaciones social media publication two',
        caption: 'Social media publication'
      },
      {
        src: '/images/projects/tcu/mandala-facebook-current.png',
        alt: 'Mandala Creaciones current Facebook page',
        caption: 'Current Facebook page'
      },
      {
        src: '/images/projects/tcu/mandala-facebook.png',
        alt: 'Mandala Creaciones Facebook presence',
        caption: 'Mandala Creaciones · Online presence'
      },
      {
        src: '/images/projects/tcu/mandala-logo-variation-one.png',
        alt: 'Mandala Creaciones logo variation',
        caption: 'Logo variation'
      },
      {
        src: '/images/projects/tcu/mandala-logo-variation-two.png',
        alt: 'Mandala Creaciones alternate logo design',
        caption: 'Alternate logo'
      },
      {
        src: '/images/projects/tcu/mandala-post-three.png',
        alt: 'Mandala Creaciones social media publication three',
        caption: 'Social media publication'
      },
      {
        src: '/images/projects/tcu/mandala-post-four.png',
        alt: 'Mandala Creaciones social media publication four',
        caption: 'Social media publication'
      },
      {
        src: '/images/projects/tcu/mandala-post-five.png',
        alt: 'Mandala Creaciones social media publication five',
        caption: 'Social media publication'
      },
      {
        src: '/images/projects/tcu/ojo-de-buey-cover.png',
        alt: 'Ojo de Buey Facebook cover',
        caption: 'Ojo de Buey · Cover design'
      },
      {
        src: '/images/projects/tcu/ojo-de-buey-profile.png',
        alt: 'Ojo de Buey profile image',
        caption: 'Ojo de Buey · Profile identity'
      },
      {
        src: '/images/projects/tcu/ojo-de-buey-facebook.png',
        alt: 'Ojo de Buey Facebook presence',
        caption: 'Ojo de Buey · Online presence'
      },
      {
        src: '/images/projects/tcu/ojo-de-buey-post.png',
        alt: 'Ojo de Buey social media post',
        caption: 'Ojo de Buey · Digital content'
      },
      {
        src: '/images/projects/tcu/ojo-de-buey-facebook-current.png',
        alt: 'Ojo de Buey current Facebook page',
        caption: 'Current Facebook page'
      },
      {
        src: '/images/projects/tcu/ojo-de-buey-post-two.png',
        alt: 'Ojo de Buey social media publication two',
        caption: 'Social media publication'
      },
      {
        src: '/images/projects/tcu/ojo-de-buey-post-three.png',
        alt: 'Ojo de Buey social media publication three',
        caption: 'Social media publication'
      },
      {
        src: '/images/projects/tcu/finca-paraiso-cover.png',
        alt: 'Finca Paraíso Facebook cover',
        caption: 'Finca Paraíso · Cover design'
      },
      {
        src: '/images/projects/tcu/finca-paraiso-logo.png',
        alt: 'Finca Paraíso logo',
        caption: 'Finca Paraíso · Logo'
      },
      {
        src: '/images/projects/tcu/finca-paraiso-profile.png',
        alt: 'Finca Paraíso Facebook presence',
        caption: 'Finca Paraíso · Online presence'
      },
      {
        src: '/images/projects/tcu/finca-paraiso-mission.png',
        alt: 'Finca Paraíso mission statement design',
        caption: 'Finca Paraíso · Mission content'
      },
      {
        src: '/images/projects/tcu/finca-paraiso-design-option.png',
        alt: 'Finca Paraíso visual identity design option',
        caption: 'Identity design option'
      },
      {
        src: '/images/projects/tcu/finca-paraiso-vision.png',
        alt: 'Finca Paraíso vision statement design',
        caption: 'Vision statement'
      },
      {
        src: '/images/projects/tcu/mufer-cover.png',
        alt: 'MUFER Facebook cover',
        caption: 'MUFER · Cover design'
      },
      { src: '/images/projects/tcu/mufer-logo.png', alt: 'MUFER logo', caption: 'MUFER · Logo' },
      {
        src: '/images/projects/tcu/mufer-profile.png',
        alt: 'MUFER Facebook presence',
        caption: 'MUFER · Online presence'
      },
      {
        src: '/images/projects/tcu/mufer-mission.png',
        alt: 'MUFER mission statement design',
        caption: 'MUFER · Mission content'
      },
      {
        src: '/images/projects/tcu/mufer-vision.png',
        alt: 'MUFER vision statement design',
        caption: 'Vision statement'
      },
      {
        src: '/images/projects/tcu/mufer-facebook-current.png',
        alt: 'MUFER current Facebook page',
        caption: 'Current Facebook page'
      },
      {
        src: '/images/projects/tcu/mufer-name-meaning.png',
        alt: 'MUFER name meaning design',
        caption: 'Name meaning'
      },
      {
        src: '/images/projects/tcu/vistas-del-encanto-home.png',
        alt: 'Vistas del Encanto home page design',
        caption: 'Home page design'
      },
      {
        src: '/images/projects/tcu/vistas-del-encanto-contact.png',
        alt: 'Vistas del Encanto contact page design',
        caption: 'Contact page design'
      },
      {
        src: '/images/projects/tcu/vistas-del-encanto-contact-footer.png',
        alt: 'Vistas del Encanto contact page footer design',
        caption: 'Contact page footer design'
      },
      {
        src: '/images/projects/tcu/vistas-del-encanto-FAQ.png',
        alt: 'Vistas del Encanto FAQ page design',
        caption: 'Frequently Asked Questions page design'
      },
      {
        src: '/images/projects/tcu/vistas-del-encanto-FAQ2.png',
        alt: 'Vistas del Encanto FAQ page 2 design',
        caption: 'Frequently Asked Questions page design part 2'
      },
    ]
  }
]

export const projectCategories = ['All', ...new Set(projects.map((project) => project.category))]
