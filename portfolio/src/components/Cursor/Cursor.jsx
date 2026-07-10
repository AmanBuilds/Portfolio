import { useEffect, useRef } from "react";
import styles from "./Cursor.module.css";

const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Disable on touch devices
    if (
      window.innerWidth <= 768 ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }

    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;

    const speed = 0.14;

    let animationFrameId;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(-50%, -50%) translate3d(${mouseX}px, ${mouseY}px, 0) scale(var(--cursor-scale))
`;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * speed;
      ringY += (mouseY - ringY) * speed;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(-50%, -50%) translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest("[data-cursor='hover']");

      if (target) {
        ringRef.current?.classList.add(styles.hover);
      
        if (dotRef.current) {
          dotRef.current.style.setProperty("--cursor-scale", "0.55");
        }
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest("[data-cursor='hover']");

      if (target) {
        ringRef.current?.classList.remove(styles.hover);
      
        if (dotRef.current) {
          dotRef.current.style.setProperty("--cursor-scale", "1");
        }
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);

      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className={styles.ring}></div>
      <div ref={dotRef} className={styles.dot}></div>
    </>
  );
};

export default Cursor;