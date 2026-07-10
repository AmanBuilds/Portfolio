import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import styles from "./Contact.module.css";
import contact from "../../data/contact";

const SocialLinks = () => {
  return (
    <div className={styles.socialSection}>
      <h4>Connect With Me</h4>

      <div className={styles.socialLinks}>
        <a
          href="https://github.com/AmanBuilds"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className={styles.socialIcon}
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/amanchaurasiya03/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={styles.socialIcon}
        >
          <FaLinkedinIn />
        </a>

        <a
          href="/One_FRONTEND_RESUME.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.resumeButton}
        >
          <FiDownload />
          Resume
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;