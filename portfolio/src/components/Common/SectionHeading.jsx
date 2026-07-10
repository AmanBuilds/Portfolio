import { motion } from "framer-motion";
import styles from "./SectionHeading.module.css";

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
}) => {
  return (
    <motion.div
      className={`${styles.header} ${styles[align]}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {eyebrow && (
        <span className={styles.eyebrow}>
          {eyebrow}
        </span>
      )}

      <h2 className={styles.title}>
        {title}
      </h2>

      {description && (
        <p className={styles.description}>
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;