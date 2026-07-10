import { HiArrowUp } from "react-icons/hi";
import styles from "./Footer.module.css";

const Footer = () => {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <h2>{"</> AmanBuilds"}</h2>

            <p>
              Building modern, scalable and user-focused frontend experiences
              with clean code and thoughtful design.
            </p>
          </div>

          <button className={styles.backToTop} onClick={handleBackToTop} aria-label="Back to top">
            <HiArrowUp />
            <span>Back to Top</span>
          </button>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 Aman Chaurasiya. All rights reserved.</p>

          <p>Built with React • Framer Motion • CSS Modules</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;