import { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);

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

  useEffect(() => {

     document.body.style.overflow = menuOpen ? "hidden" : "";
   
     return () => {
       document.body.style.overflow = "";
     };
   
   }, [menuOpen]);


   useEffect(() => {

      function handleClickOutside(e) {
    
        if (
          menuRef.current &&
          !menuRef.current.contains(e.target)
        ) {
          setMenuOpen(false);
        }
    
      }
    
      if (menuOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      }
    
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    
    }, [menuOpen]);

    useEffect(() => {

  const handleEsc = (e) => {
    if (e.key === "Escape") {
      setMenuOpen(false);
    }
  };

  if (menuOpen) {
    document.addEventListener("keydown", handleEsc);
  }

  return () => {
    document.removeEventListener("keydown", handleEsc);
  };

}, [menuOpen]);

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

        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Navigation"
        >
        
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        
        </button>

        <AnimatePresence>

  {menuOpen && (

    <>

      <motion.div
    ref={menuRef}
    className={styles.mobileMenu}
      initial={{ opacity: 0, y: -20, scale: .98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: .98 }}
      transition={{ duration: .25 }}
      >

        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>

        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>

        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>

        <a href="#what-i-bring" onClick={() => setMenuOpen(false)}>What I Bring</a>

        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

      </motion.div>

    </>

  )}

</AnimatePresence>

      </div>

    </header>

  );

}

export default Navbar;