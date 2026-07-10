import { FaArrowRight, FaDownload } from "react-icons/fa";
import styles from "../Hero.module.css";

function HeroButtons() {
  return (
    <div className={styles.buttons}>
      <a href="#contact" className={styles.primary}>
        Hire Me
        <FaArrowRight />
      </a>

      <a
  href="/One_FRONTEND_RESUME.pdf"
  download
  className={styles.secondary}
>
  <FaDownload />
  Resume
</a>
    </div>
  );
}

export default HeroButtons;