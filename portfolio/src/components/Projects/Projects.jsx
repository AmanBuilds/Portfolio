import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionReveal from "../Common/SectionReveal/SectionReveal";
import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard";
import FeaturedProject from "./FeaturedProject";
import SectionHeading from "../Common/SectionHeading";

import {
  projects,
  projectCategories,
} from "../../data/projects";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
  if (activeCategory === "All") {
    return projects;
  }

  return projects.filter((project) =>
    project.categories.includes(activeCategory)
  );
}, [activeCategory]);

const featuredProjects = filteredProjects.filter(
  (project) => project.featured
);

const regularProjects = filteredProjects.filter(
  (project) => !project.featured
);
  return (
    <section
      id="projects"
      className={styles.projects}
    >
      <div className={styles.container}>
        {/* Section Header */}
        <SectionHeading
          eyebrow="My Work"
          title="Featured Projects"
          description="A collection of projects focused on modern UI, performance, clean architecture and delightful user experiences. Every project reflects my learning journey and problem-solving approach."
        />

        <motion.div
          className={styles.filters}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          {projectCategories.map((category) => (
            <motion.button
              key={category}
              className={`${styles.filterBtn} ${
                activeCategory === category ? styles.active : ""
              }`}
              onClick={() => setActiveCategory(category)}
              whileTap={{ scale: 0.95 }}

               whileHover={{ y: -2 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <SectionReveal>
            <div className={styles.featuredGrid}>
              {featuredProjects.map((project) => (
                <FeaturedProject
                  key={project.id}
                  {...project}
                />
              ))}
            </div>
          </SectionReveal>
        )}
        
        {/* Remaining Projects */}
        {regularProjects.length > 0 && (
          <SectionReveal delay={0.15}>
            <div className={styles.grid}>
              {regularProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  {...project}
                />
              ))}
            </div>
          </SectionReveal>
        )}
      </div>
    </section>
  );
};

export default Projects;