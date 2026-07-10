import styles from "./Skills.module.css";
import { motion } from "framer-motion";
import AnimatedSkillChip from "../Common/AnimatedSkillChip";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiJavascript,
  SiVite,
  SiFramer,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiTypescript,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend Ecosystem",
    label: "Core Stack" ,
    skills: [
      { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "Vite", icon: <SiVite />, color: "#646CFF" },
      { name: "Framer Motion", icon: <SiFramer />, color: "#0055FF" },
      { name: "Responsive", icon: "📱", color: "#38BDF8" },
      { name: "CSS Modules", icon: "🎨", color: "#F59E0B" },
    ],
  },
  {
    title: "Development Tools",
    label: "Workflow",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
      { name: "GitHub", icon: <FaGithub />, color: "#FFFFFF" },
      { name: "VS Code", icon: "💻", color: "#007ACC" },
      { name: "Chrome DevTools", icon: "🛠", color: "#4CAF50" },
      { name: "npm", icon: "📦", color: "#CB3837" },
    ],
  },
  {
    title: "Currently Learning",
    label: "Growing",
    skills: [
      { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF" },
      { name: "Node.js", icon: <FaNodeJs />, color: "#5FA04E" },
      { name: "Express", icon: <SiExpress />, color: "#FFFFFF" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container">

        <div className={styles.heading}>
          <span className={styles.tag}>Skills</span>

          <h2>
            Technologies I use
            <br />
            every day.
          </h2>

          <p>
            Modern frontend technologies, development workflow and tools
            I use to build production-ready web applications.
          </p>
        </div>

        <div className={styles.wrapper}>

          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              className={styles.group}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.groupHeader}>
                <h3>{group.title}</h3>
                <span>{group.label}</span>
              </div>

              <div className={styles.skillsGrid}>
                {group.skills.map((skill) => (
                  <AnimatedSkillChip
                    key={skill.name}
                    icon={skill.icon}
                    label={skill.name}
                    color={skill.color}
                  />
                ))}
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;