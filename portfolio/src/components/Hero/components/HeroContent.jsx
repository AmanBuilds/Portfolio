import styles from "../Hero.module.css";
import { FaReact, FaJs } from "react-icons/fa";
import HeroButtons from "./HeroButtons";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import {
  containerVariants,
  fadeUp,
} from "../../../animations/heroAnimation";

function HeroContent() {
  return (
    <motion.div
  className={styles.left}
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
      <motion.span
  variants={fadeUp}
  className={styles.tag}
>👋 Available for Frontend Roles</motion.span>

      <motion.h1 variants={fadeUp} className={styles.title}>
        <span className={styles.white}>Aman</span>
        <span className={styles.gradient}>Chaurasiya</span>
      </motion.h1>

      <motion.h2 variants={fadeUp} className={styles.subtitle}>
        <TypeAnimation
        sequence={[
         "Frontend Developer",
          2500,
         "React Developer",
          2500,
         "JavaScript Developer",
          2500,
         "UI Enthusiast",
          2500,
        ]}
        wrapper="span"
        speed={52}
        repeat={Infinity}
        cursor={true}
      />
      </motion.h2>

      <motion.p variants={fadeUp} className={styles.description}>
        I build premium, fast and interactive web applications
        with React, JavaScript and modern frontend technologies.
      </motion.p>

      <motion.div variants={fadeUp}>
        <HeroButtons />
      </motion.div>

      <motion.div className={styles.tech} variants={fadeUp}>
        <span>
          <FaReact /> React
        </span>

        <span>
          <FaJs /> JavaScript
        </span>

        <span>🎨 UI/UX</span>

        <span>📱 Responsive</span>
      </motion.div>
    </motion.div>
  );
}

export default HeroContent;