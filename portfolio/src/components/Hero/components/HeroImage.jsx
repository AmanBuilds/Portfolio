  import styles from "../Hero.module.css";
  import Orbit from "../Orbit";
  import { motion } from "framer-motion";

  import { imageVariant } from "../../../animations/heroAnimation";

  function HeroImage({ x, y }) {
    return (
      <motion.div className={styles.right} variants={imageVariant} initial="hidden" animate="visible" style={{ x, y }}>
        <div className={styles.imageBox}>
          <div className={styles.orbit}></div>

          <img src="/profile.png" alt="Aman Chaurasiya" />

          <Orbit />
        </div>
      </motion.div>
    );
  }

  export default HeroImage;