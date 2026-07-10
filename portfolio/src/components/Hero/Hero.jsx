import { useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";

import styles from "./Hero.module.css";

import HeroContent from "./components/HeroContent";
import HeroImage from "./components/HeroImage";

function Hero() {
  const heroRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 120,
    damping: 18,
  });

  const y = useSpring(mouseY, {
    stiffness: 120,
    damping: 18,
  });

  const handleMouseMove = (e) => {
    const rect = heroRef.current.getBoundingClientRect();

    const offsetX = (e.clientX - rect.left - rect.width / 2) / 20;
    const offsetY = (e.clientY - rect.top - rect.height / 2) / 20;

    mouseX.set(offsetX);
    mouseY.set(offsetY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={heroRef}
      className={styles.hero}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.blurOne}></div>
      <div className={styles.blurTwo}></div>

      <div className={`container ${styles.wrapper}`}>
        <HeroContent />
        <HeroImage x={x} y={y} />
      </div>
    </section>
  );
}

export default Hero;