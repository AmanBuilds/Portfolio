// Import project images
// Replace these with actual screenshots whenever your projects are ready.

const portfolioImg =
  "https://placehold.co/1200x800/1a1a1a/ffffff?text=Portfolio";

const stationeryImg =
  "https://placehold.co/1200x800/1a1a1a/ffffff?text=Stationery+Store";

const placeholderImg =
  "https://placehold.co/1200x800/1a1a1a/ffffff?text=Coming+Soon";



export const projects = [
  {
    id: 1,

    title: "Developer Portfolio",

    shortDescription:
      "A premium portfolio showcasing my work, skills and frontend expertise with smooth animations.",

    fullDescription:
      "Modern portfolio built with React, Framer Motion and CSS Modules featuring glassmorphism, reusable components and responsive layouts.",

    image: portfolioImg,

    categories: [
    "Frontend",
    "React"
    ],

    technologies: [
  "React",
  "CSS Modules",
  "Framer Motion",
  "Responsive",
    ],

    github: "https://github.com/AmanBuilds/Portfolio",

    live: "#",

    featured: true,

    status: "In Progress",

    year: "2026"
  },

  {
    id: 2,

    title: "Stationery E-Commerce",

    shortDescription:
      "Modern e-commerce website with shopping cart, filters and responsive UI.",

    fullDescription:
      "A React based stationery store featuring reusable components, state management and clean architecture.",

    image: stationeryImg,

    categories: [
     "Frontend"
    ],

    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "Responsive",
    ],

    github: "#",

    live: "#",

    featured: true,

    status: "In Progress",

    year: "2026"
  },

  {
    id: 3,

    title: "Next Project",

    shortDescription:
      "A new exciting project is currently under development.",

    fullDescription:
      "This placeholder will automatically become a real project whenever a new application is completed.",

    image: placeholderImg,

    categories: [
     "Full Stack"
    ],

    technologies: [],

    github: null,

    live: null,

    featured: false,

    status: "Coming Soon",

    year: "2026"
  }
];

export const projectCategories = [
  "All",
  ...new Set(
    projects.flatMap((project) => project.categories)
  ),
];