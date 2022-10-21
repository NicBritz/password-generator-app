import styles from "../styles/GenerateButton.module.css";

const GenerateButton = ({ generatePassword }) => {
  return (
    <button
      className={styles.button}
      onClick={generatePassword}
      aria-label="generate button"
    >
      GENERATE{" "}
      <span>
        <svg
          className={styles.arrow}
          width="12"
          height="12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z" />
        </svg>
      </span>
    </button>
  );
};

export default GenerateButton;
