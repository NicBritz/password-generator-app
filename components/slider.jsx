import styles from "../styles/Slider.module.css";

const Slider = ({ updateLength, length }) => {
  return (
    <div className={styles.container}>
      <div className={styles.labelContainer}>
        <p className={styles.label}>Character Length</p>
        <p className={styles.lengthValue}>{length}</p>
      </div>
      <input
        className={styles.slider}
        type="range"
        min="1"
        max="20"
        value={length}
        onChange={(e) => updateLength(e.target.value)}
        aria-label="password length slider"
      />
    </div>
  );
};

export default Slider;
