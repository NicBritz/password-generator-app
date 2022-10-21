import { useState, useEffect } from "react";
import styles from "../styles/Strength.module.css";

const Strength = ({ strength }) => {
  const [indicator, setIndicator] = useState(styles.weak);
  const [currentStrength, setCurrentStrength] = useState("TOO WEAK!");

  useEffect(() => {
    if (strength === 0) {
      setIndicator(styles.tooWeak);
      setCurrentStrength("TOO WEAK!");
    } else if (strength === 1) {
      setIndicator(styles.weak);
      setCurrentStrength("WEAK");
    } else if (strength === 2) {
      setIndicator(styles.medium);
      setCurrentStrength("MEDIUM");
    } else if (strength === 3) {
      setIndicator(styles.strong);
      setCurrentStrength("STRONG");
    } else if (strength === -1) {
      setIndicator(styles.off);
      setCurrentStrength("");
    }
  }, [strength]);

  const updateIndicator = () => {
    if (strength === "TOO WEAK!") return styles.tooWeak;
  };
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>STRENGTH</h3>
      <div className={styles.indicatorContainer}>
        {currentStrength ? (
          <h4 className={styles.strengthText}>{currentStrength}</h4>
        ) : (
          <p>&nbsp;</p>
        )}
        <div className={`${styles.indicator} ${indicator}`}></div>
        <div
          className={`${styles.indicator} ${
            strength > 0 ? indicator : styles.off
          }`}
        ></div>
        <div
          className={`${styles.indicator} ${
            strength > 1 ? indicator : styles.off
          }`}
        ></div>
        <div
          className={`${styles.indicator} ${
            strength > 2 ? indicator : styles.off
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Strength;
