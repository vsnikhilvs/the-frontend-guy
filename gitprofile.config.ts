// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'vsnikhilvs', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/the-frontend-guy/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Works',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'From the Farm',
          description:
            'At From The Farm, we connect you directly to local farmers and ranchers, so you know exactly who’s raising your food. Every purchase supports small, family-run farms while providing you with the freshest, most trustworthy options.',
          imageUrl:
            'https://fromthefarm-prod.s3.us-east-1.amazonaws.com/farm/9e41e507-dbed-460a-a10a-014e35f88274/profile/profile-medium.jpeg',
          link: 'https://fromthefarm.org/',
        },
        {
          title: 'Play Of the Game Rating',
          description:
            'The first profile that focuses on a gamers online journey. We increase your discoverability, provide accurate leaderboards and give you a feature rich platform specific to the growing world of gaming.',
          imageUrl:
            'https://avatars.githubusercontent.com/u/186870256?s=280&v=4',
          link: 'https://pogr.gg/',
        },
        {
          title: 'Digital Twin - Airport (Retired)',
          description:
            'A 3D digital twin of an airport interior showcasing the possibilities of digital twin technology, allowing the customers to navigate through an airport interior and interact with point cloud integration.',
          imageUrl: '',
          link: 'https://d22p7lebuwxghf.cloudfront.net/',
        },
        {
          title: 'Smuggleverse',
          description:
            'SMUGGLEVERSE collaborates with top-tier celebrities and brands to create and distribute custom digital cannabis strains that can be CUT and STACKED. This patented technology replicates the logistics and economics of real-world smuggling, providing value and utility for our holders. Each digital strain will be available in physical form, at participating dispensaries.',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu_Qm1_lPCZvuj_598_D_OuggHvjY26pmTXw&s',
          link: 'https://www.smuggleverse.com/',
        },
        {
          title: 'LogicPlum',
          description:
            'LogicPlum builds fully transparent, on-budget AI applications from concept to launch and beyond.',
          imageUrl:
            'https://media.licdn.com/dms/image/v2/C4E0BAQEYL0jkfrcQWg/company-logo_200_200/company-logo_200_200/0/1630567875649/logicplum_logo?e=2147483647&v=beta&t=fD-CljTgX1GpgUPXPZo465pL7AqrzxDHSTvPbswY4oM',
          link: 'https://logicplum.com/',
        },
        {
          title: 'Winnow Health AI',
          description:
            "Winnow combines artificial intelligence with business intelligence to create a breakthrough solution that supplements traditional physician recruiting. In the process, we've cracked the code to fuel better, faster physician hires.",
          imageUrl:
            'https://media.licdn.com/dms/image/v2/C4D0BAQHA9DXAV5GxyA/company-logo_200_200/company-logo_200_200/0/1644949640518/winnowhealth_logo?e=2147483647&v=beta&t=oJRCDg8oV06l4V495fZIGniETlW9B2kQ0_XoLtKkz28',
          link: 'https://www.winnowhealth.ai/',
        },
        {
          title: 'Polaris Health AI (Acquired by Aya Healthcare)',
          description:
            'With three distinct modules for hiring, scheduling and staffing, Workforce AI provides actionable recommendations that optimize labor costs, improve resource allocation and free up your time to focus on other important tasks.',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGYzlutvRV9h68VE1nEGtcnj2GTgnLI0loeQ&s',
          link: 'https://www.ayahealthcare.com/healthcare-staffing-services/workforce-ai/',
        },
        {
          title: 'Roadmap Live',
          description:
            'Roadmap Live is a web-based application designed to be used by the topmost personnel in a company. A product roadmap acts as a complete visual guide that showcases the vision and how the product will evolve in the future. It is a plan of action that maps a product\'s short-term goals with long-term goals and how users can achieve them.',
          imageUrl:
            'https://media.licdn.com/dms/image/v2/C4E0BAQEYL0jkfrcQWg/company-logo_200_200/company-logo_200_200/0/1630567875649/logicplum_logo?e=2147483647&v=beta&t=fD-CljTgX1GpgUPXPZo465pL7AqrzxDHSTvPbswY4oM',
          link: 'https://roadmaplive.logicplum.com/kb/en',
        },
      ],
    },
  },
  seo: {
    title: 'Nikhil Vikraman',
    description: 'The portfolio of Nikhil Vikraman, a frontend engineer',
    imageURL: '',
  },
  social: {
    linkedin: 'nikhilvikraman',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'vsnikhilvs',
    dev: 'vsnikhilvs',
    stackoverflow: 'vsnikhilvs', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'vsnikhilvs@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'React.js',
    'Next.js',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Git',
    'HTML',
    'CSS',
    'Tailwind',
    'Redux',
    'SCSS',
  ],
  experiences: [
    {
      company: 'EY GDS India',
      position: 'Application Design and Development - Senior',
      from: 'August 2024',
      to: 'Present',
      companyLink: 'https://www.ey.com/en_in',
    },
    {
      company: 'NeoITO',
      position: 'Software Development Engineer II',
      from: 'September 2022',
      to: 'May 2024',
      companyLink: 'https://www.neoito.com',
    },
    {
      company: 'Tiltlabs',
      position: 'Software Engineer',
      from: 'January 2022',
      to: 'September 2024',
      companyLink: 'https://www.tiltlabs.io',
    },
    {
      company: 'LogicPlum',
      position: 'Frontend Engineer',
      from: 'December 2021',
      to: 'November 2020',
      companyLink: 'https://logicplum.com/',
    },
    {
      company: 'Ecorgy Solutions',
      position: 'Customer Relationship Manager',
      from: 'August 2019',
      to: 'July 2020',
      companyLink: 'https://www.ecorgysolutions.com/',
    },
  ],
  certifications: [
    {
      name: 'GitHub Copilot',
      body: 'GitHub',
      year: 'May 2025',
      link: 'https://www.credly.com/badges/796b0a61-15a7-44ab-9b3b-9d4180674d6b',
    },
  ],
  educations: [
    {
      institution: 'University of Kerala',
      degree: 'Bachelor of Technology in Mechanical Engineering',
      from: '2014',
      to: '2018',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'vsnikhilvs', // to hide blog section, keep it empty
    limit: 5, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'garden',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'garden',
      'forest',
      'aqua',
      'dim',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
