import react from "../../assets/icons/react.svg";
import html from "../../assets/icons/html5.svg";
import css from "../../assets/icons/css.svg";
import javascript from "../../assets/icons/javascript.svg";
import git from "../../assets/icons/git.svg";
import figma from "../../assets/icons/figma.svg";

import styles from "./Hero.module.css";

const techIcons = [
  { icon: react, angle: 0, alt: "React" },
  { icon: html, angle: 60, alt: "HTML5" },
  { icon: css, angle: 120, alt: "CSS3" },
  { icon: javascript, angle: 180, alt: "JavaScript" },
  { icon: git, angle: 240, alt: "Git" },
  { icon: figma, angle: 300, alt: "Figma" },
];

function Orbit() {
  return (
    <div className={styles.iconOrbit}>
      {techIcons.map((item, index) => (
        <div
          key={index}
          className={styles.techIcon}
          style={{ "--angle": `${item.angle}deg` }}
        >
          <span className={styles.iconInner}>
           <img src={item.icon} alt={item.alt} />
          </span>
        </div>
      ))}
    </div>
  );
}

export default Orbit;