import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

import styles from "./ProjectCard.module.css";

const ProjectCard = ({
  title,
  image,
  shortDescription,
  technologies,
  github,
  live,
  status,
  year,
}) => {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Browser Preview */}
      <div className={styles.imageWrapper}>
        <div className={styles.browser}>
          <div className={styles.browserHeader}>
            <div className={styles.dots}>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className={styles.addressBar}>
              {title.toLowerCase().replace(/\s+/g, "")}.dev
            </div>
          </div>

          <div className={styles.browserBody}>
            <img
              src={image}
              alt={title}
              className={styles.image}
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.topRow}>
          <span className={styles.status}>{status}</span>
          <span className={styles.year}>{year}</span>
        </div>

        <h3 className={styles.title}>{title}</h3>

        <p className={styles.description}>
          {shortDescription}
        </p>

        <div className={styles.techStack}>
          {technologies.map((tech) => (
            <span
              key={tech}
              className={styles.tech}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.actions}>
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.liveBtn}
            >
              Live Demo
              <HiOutlineArrowUpRight />
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubBtn}
              aria-label={`${title} GitHub Repository`}
            >
              <FaGithub />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;