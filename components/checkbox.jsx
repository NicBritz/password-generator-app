import styles from "../styles/CheckboxContainer.module.css";

const Checkbox = ({ children, name, updateSelection }) => {
  return (
    <label className={styles.checkboxContainer}>
      {children}
      <input
        type="checkbox"
        onClick={(e) => updateSelection(e.target.name, e.target.checked)}
        name={name}
      />
      <span className={styles.checkmark}>
        <svg width="14" height="12" xmlns="http://www.w3.org/2000/svg">
          <path
            stroke="#18171F"
            strokeWidth="3"
            fill="none"
            d="M1 5.607 4.393 9l8-8"
          />
        </svg>
      </span>
    </label>
  );
};

export default Checkbox;
