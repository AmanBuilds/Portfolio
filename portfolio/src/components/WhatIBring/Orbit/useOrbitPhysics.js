import { useEffect, useState } from "react";

const SIZE = 58;

export default function useOrbitPhysics(wrapperRef) {
  const [icons, setIcons] = useState([
    { x: 40, y: 40, vx: 1.4, vy: 1.0 },
    { x: 260, y: 120, vx: -1.2, vy: 1.3 },
    { x: 520, y: 60, vx: 1.1, vy: -1.1 },
    { x: 720, y: 180, vx: -1.5, vy: -0.9 },
  ]);

  useEffect(() => {
    let frame;

    const animate = () => {
      const wrapper = wrapperRef.current;

      if (!wrapper) {
        frame = requestAnimationFrame(animate);
        return;
      }

      const width = wrapper.clientWidth;
      const height = wrapper.clientHeight;

      setIcons((prev) =>
        prev.map((icon) => {
          let { x, y, vx, vy } = icon;

          x += vx;
          y += vy;

          if (x <= 0) {
            x = 0;
            vx *= -1;
          }

          if (x >= width - SIZE) {
            x = width - SIZE;
            vx *= -1;
          }

          if (y <= 0) {
            y = 0;
            vy *= -1;
          }

          if (y >= height - SIZE) {
            y = height - SIZE;
            vy *= -1;
          }

          return { x, y, vx, vy };
        })
      );

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [wrapperRef]);

  return icons;
}