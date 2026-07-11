import { FiArrowUpRight } from "react-icons/fi";
import styles from "./StrengthCard.module.css";
import Orbit from "./Orbit/Orbit";


const StrengthCard = ({
  icon: Icon,
  title,
  description,
  featured = false,
  highlights = [],
  orbitIcons = [],
}) => {
  return (
  <article
    className={`${styles.card} ${featured ? styles.featured : ""}`}
  >
    
     <Orbit icons={orbitIcons} />

      <div className={styles.left}>
  <div className={styles.iconWrapper}>
    <Icon className={styles.icon} />
  </div>

  <div className={styles.content}>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>

  <div className={styles.tags}>
    {highlights.map((item) => (
      <span key={item}>{item}</span>
    ))}
  </div>
</div>

<div className={styles.arrow}>
  <FiArrowUpRight />
</div>
    </article>
  );
};

export default StrengthCard;