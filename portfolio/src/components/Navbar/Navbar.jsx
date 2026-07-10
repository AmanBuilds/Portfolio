import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <header
      className={`${styles.navbar} ${scrolled ? styles.active : ""}`}
    >

      <div className={`container ${styles.wrapper}`}>

        <a href="/" className={styles.logo}>
         <span className={styles.icon}>&lt;/&gt;</span>
          Aman<span>Builds</span>
        </a>

        <nav>

          <ul className={styles.links}>

            <li><a href="#about">About</a></li>

            <li><a href="#skills">Skills</a></li>

            <li><a href="#projects">Projects</a></li>

            <li><a href="#what-i-bring">What I Bring</a></li>

            <li><a href="#contact">Contact</a></li>

          </ul>

        </nav>

      </div>

    </header>

  );

}

export default Navbar;