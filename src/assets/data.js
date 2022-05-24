const experiences = [
  {
    type: "edu",
    society: "Côte d'Azur University",
    logo: "unice-logo-min.png",
    link: "https://univ-cotedazur.eu/",
    jobOrDegree: "Master MBDS (Mobility, Big Data and System Integration)",
    department: "Science and Technology (MIAGE)",
    start: "january 2020",
    end: "november 2021",
    code: "unice",
  },
  {
    type: "edu",
    society: "IT University",
    logo: "itu-logo-min.png",
    link: "https://www.ituniversity-mg.com/",
    jobOrDegree: "Bachelor's degree in Computer science",
    department: "IT (Development)",
    start: "september 2017",
    end: "december 2019",
    code: "itu",
  },
  {
    type: "xp",
    society: "Comdata Group",
    logo: "comdata-logo-min.png",
    link: "https://www.comdatagroup.com/",
    jobOrDegree: "Web Developer",
    department: "IT",
    start: "june 2019",
    end: "november 2019",
    code: "comdata",
  },
  {
    type: "xp",
    society: "Eufonie",
    logo: "eufonie-logo-min.png",
    link: "https://www.eufonie.fr/",
    jobOrDegree: "Fullstack Software Developer",
    department: "Technology",
    start: "february 2020",
    end: "june 2020",
    code: "eufonie",
  },
  {
    type: "xp",
    society: "W-3D",
    logo: "w3d-logo-min.png",
    link: "https://w-3d.eu/",
    jobOrDegree: "Web Developer (Fullstack Javascript Developer)",
    department: "WEB",
    start: "november 2020",
    end: "June 2022",
    code: "w3d",
  },
];

const skills = [
  {
    technology: "Angular",
    logo: "angular-logo-min.png",
    link: "https://angular.io/",
    description:
      "JavaScript (TypeScript-based) front-end web application framework",
    capacity: 80,
    important: true,
  },
  {
    technology: "NGRX",
    logo: "ngrx-logo-min.png",
    link: "https://ngrx.io/",
    description: "State management for Angular applications (Redux)",
    capacity: 60,
  },
  {
    technology: "Three JS",
    logo: "threejs-logo-min.png",
    link: "https://threejs.org/",
    description: "JavaScript library and API for 3D web applications",
    capacity: 70,
  },
  {
    technology: "Node JS",
    logo: "nodejs-logo-min.png",
    link: "https://nodejs.org/en/",
    description: "Back-end JavaScript runtime environment",
    frameworks: "Express JS - Nest JS",
    capacity: 80,
    important: true,
  },
  {
    technology: "MongoDB",
    logo: "mongodb-logo-min.png",
    link: "https://www.mongodb.com/",
    description: "NoSQL database",
    capacity: 80,
    important: true,
  },
  {
    technology: "VueJs",
    logo: "vuejs-logo-min.png",
    link: "https://vuejs.org/",
    description: "Front end JavaScript framework",
    capacity: 40,
  },
  {
    technology: "Flutter",
    logo: "flutter-logo-min.png",
    link: "https://flutter.dev/",
    description: "UI software development kit (Mobile)",
    capacity: 40,
  },
];

const mainProjects = [
  {
    title: "Portfolio",
    shortDescription: "My Portfolio",
    description: "",
    society: "",
    screenshot: "",
    technologies: [
      { name: "Vue JS", logo: "vuejs-logo-min.png" },
      { name: "Three JS", logo: "threejs-logo-min.png" },
    ],
    missions: [
      "designed the website with pure HTML & CSS",
      "implemented 3D objects, 3D interactive house and shaders using ThreeJs"
    ],
    screenshot: "portfolio.jpg"
  },
  {
    title: "Grazia",
    shortDescription: "Virtual Fashion Week",
    description: "",
    society: "W-3D",
    screenshot: "",
    technologies: [
      { name: "Angular", logo: "angular-logo-min.png" },
      { name: "Three JS", logo: "threejs-logo-min.png" },
      { name: "Express JS", logo: "expressjs-logo-min.png" },
      { name: "Mongodb", logo: "mongodb-logo-min.png" },
    ],
    missions: [
      "contributed to feasibility study, research and brief in order to come up with a planning",
      "established a fully virtual interactive world on a website page",
      "introduced an application state management by using NGRX",
      "implemented a Back Office containing a file management, an access management and a dashboard",
      "incorporated back-end features for the charts and statistics of the dashboard",
    ],
    screenshot: "grazia.jpg"
  },
  {
    title: "SkinCeuticals [Conference]",
    shortDescription: "Virtual Skincare Conference",
    description: "",
    society: "W-3D",
    screenshot: "",
    technologies: [
      { name: "Angular", logo: "angular-logo-min.png" },
      { name: "NGRX", logo: "ngrx-logo-min.png" },
      { name: "Express JS", logo: "expressjs-logo-min.png" },
      { name: "Mongodb", logo: "mongodb-logo-min.png" },
    ],
    missions: [
      "participated in the Back Office implementation of the asset manager, timer manager, music manager and the statistics",
      "generated a leaderboard interface (game results)",
      "wrote optimized back-end code, especially for the file storage management",
      "ensured support and troubleshoot issues during the event",
    ],
    screenshot: "conference.jpg",
  },
  {
    title: "SkinCeuticals [Clinic]",
    shortDescription: "Virtual Skincare Clinic",
    description: "",
    society: "W-3D",
    screenshot: "",
    technologies: [
      { name: "Angular", logo: "angular-logo-min.png" },
      { name: "NGRX", logo: "ngrx-logo-min.png" },
      { name: "Express JS", logo: "expressjs-logo-min.png" },
      { name: "Mongodb", logo: "mongodb-logo-min.png" },
    ],
    missions: [
      "adjusted the responsive design, for all screens especially for mobile",
      "facilitated file transfer by adding a QR code system to the project",
      "structured the Back Office application and included dynamic content management",
      "orchestrated backend and database management",
    ],
    screenshot: "skin.jpg",
  },
  {
    title: "Scraping Wines",
    shortDescription: "Fetching Data From Wine Sites",
    description: "",
    society: "Eufonie",
    screenshot: "",
    technologies: [
      { name: "Express JS", logo: "expressjs-logo-min.png" },
      { name: "AWS", logo: "aws-logo-min.png" },
    ],
    missions: [
      "conducted project conception and system architecture set up",
      "built a scraping program used for extracting data from specific wine sites",
      "built mailing and downloads services for the client",
      "deployed the serverless application on AWS lambda, s3, dynamoDb and CloudWatch",
    ],
    screenshot: "wines.jpg",
  },
  {
    title: "Jigsaw Puzzle",
    shortDescription: "Android & IOS Application",
    description: "",
    society: "Eufonie",
    screenshot: "",
    technologies: [
      { name: "Flutter", logo: "flutter-logo-min.png" },
      { name: "Firebase", logo: "firebase-logo-min.png" },
    ],
    missions: [
      "conceptualized an advanced mobile application state management by using Async Redux",
      "managed data manipulation using firebase services and cache systems",
      "designed application screens",
    ],
    screenshot: "puzzle.jpg",
    mobile: true
  },
  {
    title: "SIRH",
    shortDescription:
      "Central Management Of The Human Resources Information System",
    description: "",
    society: "Comdata",
    screenshot: "",
    technologies: [
      { name: "Angular", logo: "angular-logo-min.png" },
      { name: "Express JS", logo: "expressjs-logo-min.png" },
      { name: "MongoDB", logo: "mongodb-logo-min.png" },
    ],
    missions: [
      "administered the full lifecycle of software development, including the technical specs definition, project conception, planning, design, development and deployment",
      "facilitated HR Department tasks by implementing automatic administrative management system",
      "incorporated a canteen order management module",
      "led the back-end and database team",
    ],
    screenshot: "sirh.jpg",
  },
  {
    title: "Renovation Fair",
    shortDescription: "Virtual Renovation Fair",
    description: "",
    society: "W-3D",
    screenshot: "",
    technologies: [
      { name: "Angular", logo: "angular-logo-min.png" },
      { name: "Express JS", logo: "expressjs-logo-min.png" },
      { name: "MongoDB", logo: "mongodb-logo-min.png" },
    ],
    missions: [
      "implemented a Back Office based on a detailed Configurator",
      "participated in data transferring between different technologies (Unity - Angular)",
      "worked closely with the back-end team",
    ],
    screenshot: "reno.jpg",
  },
  {
    title: "Pimp library",
    shortDescription: "Gallery for 3D Objects (Website)",
    description: "",
    society: "W-3D",
    screenshot: "",
    technologies: [
      { name: "Angular", logo: "angular-logo-min.png" },
      { name: "NGRX", logo: "ngrx-logo-min.png" },
      { name: "Nest JS", logo: "nestjs-logo-min.png" },
      { name: "MongoDB", logo: "mongodb-logo-min.png" },
    ],
    missions: [
      "created a board editor and a document manager",
      "applied an application state management by using NGRX",
      "ensured support and troubleshoot issues",
    ],
    screenshot: "pimp.jpg",
  },
  {
    title: "Bets",
    shortDescription: "Sports Betting Site",
    description: "",
    society: "Côte d'Azur University",
    screenshot: "",
    technologies: [
      { name: "Angular", logo: "angular-logo-min.png" },
      { name: "Express JS", logo: "expressjs-logo-min.png" },
      { name: "MongoDB", logo: "mongodb-logo-min.png" },
      { name: "Flutter", logo: "flutter-logo-min.png" },
      { name: "Spring", logo: "spring-logo-min.png" },
      { name: ".Net", logo: "net-logo-min.png" },
      { name: "Oracle", logo: "oracle-logo-min.png" },
    ],
    missions: [
      "ensured application communication, data transfer and security between web, mobile, and desktop application technologies",
      "ensured data management system with nosql database and relational database (mongoDB - Oracle)",
      "developed the main features: tokens & transaction - QR code - external API usage",
    ],
    screenshot: "bets.jpg",
    mobile: true
  },
  {
    title: "Assignments",
    shortDescription: "Student Grade Management",
    description: "",
    society: "Côte d'Azur University",
    screenshot: "",
    technologies: [
      { name: "Angular", logo: "angular-logo-min.png" },
      { name: "Express JS", logo: "expressjs-logo-min.png" },
      { name: "MongoDB", logo: "mongodb-logo-min.png" },
    ],
    missions: [
      "conducted project conception, system architecture set up and planning",
      "designed user-friendly web pages",
      "delivered the project by deploying on Heroku",
    ],
    screenshot: "assignements.jpg",
  },
  {
    title: "Event App",
    shortDescription: "Android Application",
    description: "",
    society: "IT University",
    screenshot: "",
    technologies: [
      { name: "Flutter", logo: "flutter-logo-min.png" },
      { name: "Firebase", logo: "firebase-logo-min.png" },
    ],
    missions: [
      "established project conception, system architecture set up, design, development and delivery",
      "incorporated firebase API & services usage",
      "designed mobile screens and applied features",
    ],
    screenshot: "event.jpg",
    mobile: true
  },
];

const sideProjects = [
  {
    title: "Tailora",
    shortDescription: "Project Management Web Application",
    technologies: [
      { name: "Angular", logo: "angular-logo-min.png" },
      { name: "NGRX", logo: "ngrx-logo-min.png" },
      { name: "Nest JS", logo: "nestjs-logo-min.png" },
      { name: "MongoDB", logo: "mongodb-logo-min.png" },
    ],
  },
  {
    title: "GTM Reno v2",
    shortDescription: "3D Mockup Web Application",
    technologies: [
      { name: "Angular", logo: "angular-logo-min.png" },
      { name: "NGRX", logo: "ngrx-logo-min.png" },
    ],
  },
  {
    title: "GTM the Fullroom",
    shortDescription: "Project Management Site",
    technologies: [
      { name: "Vue JS", logo: "vuejs-logo-min.png" },
      { name: "Vue X", logo: "vuex-logo-min.png" },
      { name: "Nest JS", logo: "nestjs-logo-min.png" },
      { name: "MongoDB", logo: "mongodb-logo-min.png" },
    ],
  },
  {
    title: "Flutter SDK",
    shortDescription: "Collection of Flutter Tools ",
    technologies: [{ name: "Flutter", logo: "flutter-logo-min.png" }],
  },
  {
    title: "Data Analysis",
    shortDescription: "Data Analysis with R",
    technologies: [{ name: "R", logo: "r-logo-min.png" }],
  },
  {
    title: "Bricks Game",
    shortDescription: "Bricks Game For Android",
    technologies: [
      { name: "Android", logo: "android-logo-min.png" },
      { name: "Node JS", logo: "nodejs-logo-min.png" },
      { name: "MongoDB", logo: "mongodb-logo-min.png" },
    ],
  },
  {
    title: "Lost Treasure",
    shortDescription: "2D Unity Game",
    technologies: [{ name: "unity", logo: "unity-logo-min.png" }],
  },
  {
    title: "Formula 1",
    shortDescription: "Formula 1 Simulator",
    technologies: [{ name: "java", logo: "java-logo-min.png" }],
  },
  {
    title: "Bank App",
    shortDescription: "Banking Application",
    technologies: [
      { name: "java", logo: "java-logo-min.png" },
      { name: "Android", logo: "android-logo-min.png" },
      { name: "Node JS", logo: "nodejs-logo-min.png" },
      { name: "MongoDB", logo: "mongodb-logo-min.png" },
    ],
  },
  {
    title: "Machine Learning",
    shortDescription: "Iris Classification",
    technologies: [
      { name: "java", logo: "java-logo-min.png" },
      { name: "Oracle", logo: "oracle-logo-min.png" },
    ],
  },
  {
    title: "Stock Management",
    shortDescription: "Stock Management Application",
    technologies: [
      { name: "java", logo: "java-logo-min.png" },
      { name: "Oracle", logo: "oracle-logo-min.png" },
    ],
  },
  {
    title: "Ecommerce",
    shortDescription: "Ecommerce Website",
    technologies: [
      { name: "java", logo: "java-logo-min.png" },
      { name: "Oracle", logo: "oracle-logo-min.png" },
    ],
  },
];

const projects = [...mainProjects, ...sideProjects];
export { experiences, skills, mainProjects, sideProjects, projects };
