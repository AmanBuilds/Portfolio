import { useRef } from "react";
import styles from "./Orbit.module.css";
import OrbitIcon from "./OrbitIcon";
import useOrbitPhysics from "./useOrbitPhysics";

export default function Orbit({ icons = [] }) {
  const wrapperRef = useRef(null);

  const positions = useOrbitPhysics(wrapperRef);

  return (
    <div
      ref={wrapperRef}
      className={styles.wrapper}
    >
      {icons.map((Icon, index) => (
        <OrbitIcon
          key={index}
          Icon={Icon}
          x={positions[index]?.x || 0}
          y={positions[index]?.y || 0}
        />
      ))}
    </div>
  );
}