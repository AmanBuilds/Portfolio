import { motion } from "framer-motion";
import styles from "./AnimatedSkillChip.module.css";


const baseIconVariants = {
  rest: {
    opacity: 1,
    scale: 1,
  },

  hover: {
    opacity: 0.25,
    scale: 0.9,
    transition: {
      duration: 0.15,
    },
  },
};

const floatingIconVariants = {
  rest: {
    opacity: 0,
    y: 0,
    scale: 0.8,
  },

  hover: {
    opacity: 1,
    y: -42,
    scale: 1.55,

    transition: {
      type: "spring",
      stiffness: 420,
      damping: 14,
    },
  },
};

function AnimatedSkillChip({
  icon,
  label,
  color = "#61DAFB",
}) {
  return (
    <motion.div
  className={styles.chip}
  initial="rest"
  whileHover="hover"
      style={{
        "--accent": color,
      }}
    >
      <div className={styles.iconArea}>

        {/* Original */}

        <motion.div
          className={styles.baseIcon}
          variants={baseIconVariants}
        >
          {icon}
        </motion.div>

        {/* Floating */}

        <motion.div
  className={styles.floatingIcon}
  variants={floatingIconVariants}
  style={{
    transformOrigin: "center center",
  }}
>
          {icon}
        </motion.div>

      </div>

      <span>{label}</span>
    </motion.div>
  );
}

export default AnimatedSkillChip;