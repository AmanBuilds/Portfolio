import { motion } from "framer-motion";
import styles from "./About.module.css";
import {
  FiCode,
  FiLayout,
  FiZap,
  FiMonitor,
} from "react-icons/fi";

const stats = [
  {
    number: "1+",
    label: "Years Experience",
  },
  {
    number: "15+",
    label: "Projects Built",
  },
  {
    number: "100%",
    label: "Responsive",
  },
  {
    number: "∞",
    label: "Learning",
  },
];

const highlights = [
  "Clean Code",
  "Responsive Design",
  "Pixel Perfect UI",
  "React Ecosystem",
  "Performance Focus",
  "Modern Animations",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <motion.div
          className={styles.heading}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span
            className={styles.tag}
            variants={itemVariants}
          >
            About Me
          </motion.span>

          <motion.h2 variants={itemVariants}>
            Building fast, beautiful & interactive web experiences.
          </motion.h2>
        </motion.div>

        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Card */}

          <motion.div
            className={styles.profileCard}
            variants={itemVariants}
          >
            <div className={styles.avatar}>
              <FiCode />
            </div>

            <h3>Aman Chaurasiya</h3>

            <p>Frontend Developer</p>

            <div className={styles.status}>
              <span className={styles.dot}></span>
              Available for Work
            </div>
          </motion.div>

          {/* Right Side */}

          <motion.div
            className={styles.info}
            variants={itemVariants}
          >
            <p className={styles.description}>
              I'm a Frontend Developer passionate about building
              modern, responsive and user-focused web applications.
              I love transforming ideas into elegant digital
              experiences with clean code, smooth animations and
              scalable architecture.
            </p>

            <div className={styles.stats}>
              {stats.map((item) => (
                <div key={item.label} className={styles.statCard}>
                  <h3>{item.number}</h3>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <div className={styles.highlights}>
              {highlights.map((item) => (
                <div key={item} className={styles.highlight}>
                  <FiLayout />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;