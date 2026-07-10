import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./Loader.module.css";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += 2;

      if (current >= 100) {
        current = 100;
        clearInterval(interval);
      }

      setProgress(current);
    }, 40);

    return () => clearInterval(interval);
  }, []);
  return (
    <motion.div
      className={styles.loader}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: -20,
        transition: {
          duration: 0.45,
          ease: [0.4, 0, 0.2, 1],
        },
      }}
      transition={{
        duration: 0.35,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <motion.div
        className={styles.content}
        initial={{
          opacity: 0,
          scale: 0.96,
          y: 12,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.div
          className={styles.logoBox}
          animate={{
            y: [0, -3, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className={styles.logo}>&lt;/&gt;</span>
        </motion.div>

        <h2 className={styles.brand}>AmanBuilds</h2>

        <p className={styles.tagline}>
          Crafting Modern Web Experiences
        </p>
        
        <div className={styles.progress}>
          <span
            className={styles.progressFill}
            style={{
              transform: `scaleX(${progress / 100})`,
            }}
          ></span>
        </div>
      </motion.div>

      <div className={styles.glow}></div>
    </motion.div>
  );
};

export default Loader;