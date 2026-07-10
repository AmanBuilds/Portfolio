import styles from "./Orbit.module.css";

export default function OrbitIcon({ Icon, x, y }) {
  return (
    <div
      className={styles.icon}
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
    >
      <Icon />
    </div>
  );
}