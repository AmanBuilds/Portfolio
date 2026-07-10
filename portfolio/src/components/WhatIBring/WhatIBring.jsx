import styles from "./WhatIBring.module.css";
import strengths from "../../data/strengths";
import StrengthCard from "./StrengthCard";

const WhatIBring = () => {
  const cards = strengths;

  return (
    <section id="what-i-bring" className={styles.section}>
      <div className="container">
        <div className={styles.heading}>
          <span className={styles.label}>WHY WORK WITH ME</span>

          <h2>What I Bring</h2>

          <p>
            Beyond building interfaces, I focus on writing clean, scalable and
            performance-driven frontend applications that deliver a great user
            experience.
          </p>
        </div>

        <div className={styles.grid}>
            {cards.map((item) => (
                <StrengthCard key={item.id} {...item} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIBring;