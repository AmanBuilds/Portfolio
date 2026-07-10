import {
  FaDesktop,
  FaMobileAlt,
  FaTabletAlt,
  FaReact,
  FaLayerGroup,
  FaRocket,
  FaBolt,
  FaCode,
  FaPuzzlePiece,
  FaBook,
  FaToolbox,
} from "react-icons/fa";

import {
  FiLayout,
  FiMonitor,
  FiCpu,
  FiZap,
  FiCode,
  FiTool,
  FiTrendingUp,
  FiBook,
} from "react-icons/fi";

const strengths = [
  {
    id: 1,
    featured:true,
    title: "Responsive Development",
    description:
      "Creating seamless experiences that adapt beautifully across desktop, tablet and mobile devices.",
    icon: FiLayout,

    orbitIcons: [
      FaDesktop,
      FiMonitor,
      FaMobileAlt,
      FaTabletAlt,
    ],
    highlights: [
      "Mobile First",
      "Responsive UI",
      "Cross Browser",
    ],
  },

  {
    id: 2,
    title: "Component Architecture",
    description:
      "Building reusable, scalable React components that keep projects clean and maintainable.",
    icon: FaLayerGroup,

    orbitIcons: [
      FaReact,
      FiCpu,
      FaLayerGroup,
      FiCode,
    ],
    highlights: [
      "Reusable Components",
      "Scalable Structure",
      "Maintainable Code",
    ],
  },

  {
    id: 3,
    title: "Performance First",
    description:
      "Optimizing interfaces for fast loading and smooth interactions.",
    icon: FaBolt,

    orbitIcons: [
      FaRocket,
      FiTrendingUp,
      FiZap,
      FaBolt,
    ],
    highlights: [
      "Fast Loading",
      "Code Splitting",
      "Optimized Rendering",
    ],
  },

  {
    id: 4,
    title: "Clean Code",
    description:
      "Writing readable, organized and maintainable code following modern frontend best practices.",
    icon: FiCode,

    orbitIcons: [
      FaCode,
      FiCode,
      FaReact,
      FiCpu,
    ],
    highlights: [
  "Readable Code",
  "Best Practices",
  "Consistent Naming",
],
  },

  {
    id: 5,
    title: "Problem Solving",
    description:
      "Breaking complex UI challenges into practical and scalable solutions.",
    icon: FiTool,

    orbitIcons: [
      FaPuzzlePiece,
      FaToolbox,
      FiTool,
      FaReact,
    ],
    highlights: [
  "Debugging",
  "Logical Thinking",
  "API Integration",
],
  },

  {
    id: 6,
    title: "Continuous Learning",
    description:
      "Constantly improving through real-world projects while exploring modern frontend technologies.",
    icon: FiBook,

    orbitIcons: [
      FaBook,
      FaReact,
      FaReact,
      FiTrendingUp,
    ],
    highlights: [
  "React Ecosystem",
  "Modern JavaScript",
  "New Technologies",
],
  },
];

export default strengths;