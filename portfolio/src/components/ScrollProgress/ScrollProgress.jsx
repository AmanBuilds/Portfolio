import { useEffect, useRef } from "react";
import styles from "./ScrollProgress.module.css";

const ScrollProgress = () => {
  const progressRef = useRef(null);
  const ticking = useRef(false);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        scrollHeight > 0 ? scrollTop / scrollHeight : 0;

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
        progressRef.current.style.opacity = progress > 0 ? "1" : "0";
      }

      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(updateProgress);
      }
    };

    // Initial state
    updateProgress();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div
        ref={progressRef}
        className={styles.progress}
      />
    </div>
  );
};

export default ScrollProgress;