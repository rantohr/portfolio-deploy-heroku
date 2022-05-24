import * as projectFrame from "./project-frame";

/**
 * MAIN
 */
// ROW 1
const portfolio = projectFrame.frameGenerator(
  "Portfolio",
  "/textures/projects/portfolio-frame-min.jpg",
  {
    x: 3.9,
    y: 4.1,
    z: -3,
  }
);
const grazia = projectFrame.frameGenerator(
  "Grazia",
  "/textures/projects/grazia-frame-min.jpg",
  {
    x: 3.9,
    y: 4.1,
    z: -1,
  }
);
const conference = projectFrame.frameGenerator(
  "SkinCeuticals [Conference]",
  "/textures/projects/conference-frame-min.jpg",
  {
    x: 3.9,
    y: 4.1,
    z: 1,
  }
);
const skin = projectFrame.frameGenerator(
  "SkinCeuticals [Clinic]",
  "/textures/projects/skin-frame-min.jpg",
  {
    x: 3.9,
    y: 4.1,
    z: 3,
  }
);

// ROW 2
const scraping = projectFrame.frameGenerator(
  "Scraping Wines",
  "/textures/projects/scraping-frame-min.jpg",
  {
    x: 3.9,
    y: 2.6,
    z: -3,
  }
);
const puzzle = projectFrame.frameGenerator(
  "Jigsaw Puzzle",
  "/textures/projects/puzzle-frame-min.jpg",
  {
    x: 3.9,
    y: 2.6,
    z: -1,
  }
);
const sirh = projectFrame.frameGenerator(
  "SIRH",
  "/textures/projects/sirh-frame-min.jpg",
  {
    x: 3.9,
    y: 2.6,
    z: 1,
  }
);
const renovation = projectFrame.frameGenerator(
  "Renovation Fair",
  "/textures/projects/reno-frame-min.jpg",
  {
    x: 3.9,
    y: 2.6,
    z: 3,
  }
);

// ROW 3
const pimp = projectFrame.frameGenerator(
  "Pimp library",
  "/textures/projects/pimp-frame-min.jpg",
  {
    x: 3.9,
    y: 1.1,
    z: -3,
  }
);
const bets = projectFrame.frameGenerator(
  "Bets",
  "/textures/projects/bets-frame-min.jpg",
  {
    x: 3.9,
    y: 1.1,
    z: -1,
  }
);
const assignments = projectFrame.frameGenerator(
  "Assignments",
  "/textures/projects/assignments-frame-min.jpg",
  {
    x: 3.9,
    y: 1.1,
    z: 1,
  }
);
const events = projectFrame.frameGenerator(
  "Event Management App",
  "/textures/projects/event-frame-min.jpg",
  {
    x: 3.9,
    y: 1.1,
    z: 3,
  }
);

/**
 * LEFT
 */
// COLUMN 1
const flutterSDK = projectFrame.frameGenerator(
  "Flutter SDK",
  "/textures/projects/sdk-frame-min.jpg",
  {
    x: 3,
    y: 4.1,
    z: -4.9,
  },
  0.001
);
const dataAnalysis = projectFrame.frameGenerator(
  "Data Analysis",
  "/textures/projects/analysis-frame-min.jpg",
  {
    x: 3,
    y: 2.6,
    z: -4.9,
  },
  0.001
);
const bricks = projectFrame.frameGenerator(
  "Bricks Game",
  "/textures/projects/bricks-frame-min.jpg",
  {
    x: 3,
    y: 1.1,
    z: -4.9,
  },
  0.001
);

// COLUMN 2
const tailora = projectFrame.frameGenerator(
  "Tailora",
  "/textures/projects/tailora-frame-min.jpg",
  {
    x: 1,
    y: 4.1,
    z: -4.9,
  },
  0.001
);
const gtmreno = projectFrame.frameGenerator(
  "GTM Reno v2",
  "/textures/projects/gtmreno-frame-min.jpg",
  {
    x: 1,
    y: 2.6,
    z: -4.9,
  },
  0.001
);
const fullroom = projectFrame.frameGenerator(
  "GTM the Fullroom",
  "/textures/projects/fullroom-frame-min.jpg",
  {
    x: 1,
    y: 1.1,
    z: -4.9,
  },
  0.001
);

/**
 * RIGHT
 */
// COLUMN 1
const unity = projectFrame.frameGenerator(
  "Lost Treasure",
  "/textures/projects/treasure-frame-min.jpg",
  {
    x: 3,
    y: 4.1,
    z: 4.9,
  },
  -Math.PI
);
const formule1 = projectFrame.frameGenerator(
  "Formula 1",
  "/textures/projects/f1-frame-min.jpg",
  {
    x: 3,
    y: 2.6,
    z: 4.9,
  },
  -Math.PI
);
const bank = projectFrame.frameGenerator(
  "Bank App",
  "/textures/projects/bank-frame-min.jpg",
  {
    x: 3,
    y: 1.1,
    z: 4.9,
  },
  -Math.PI
);

// COLUMN 2
const ml = projectFrame.frameGenerator(
  "Machine Learning",
  "/textures/projects/ml-frame-min.jpg",
  {
    x: 1,
    y: 4.1,
    z: 4.9,
  },
  -Math.PI
);
const stock = projectFrame.frameGenerator(
  "Stock Management",
  "/textures/projects/stock-frame-min.jpg",
  {
    x: 1,
    y: 2.6,
    z: 4.9,
  },
  -Math.PI
);
const ecommerce = projectFrame.frameGenerator(
  "Ecommerce",
  "/textures/projects/ecommerce-frame-min.jpg",
  {
    x: 1,
    y: 1.1,
    z: 4.9,
  },
  -Math.PI
);

export {
  portfolio,
  grazia,
  conference,
  skin,
  scraping,
  pimp,
  flutterSDK,
  dataAnalysis,
  bricks,
  tailora,
  unity,
  puzzle,
  sirh,
  renovation,
  bets,
  assignments,
  events,
  gtmreno,
  fullroom,
  formule1,
  bank,
  ml,
  stock,
  ecommerce,
};
