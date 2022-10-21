import styles from "../styles/PasswordContainer.module.css";
import { useState } from "react";

const PasswordContainer = ({ password }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    if (password !== "P4$5W0rD!") {
      navigator.clipboard.writeText(password);
      setCopied(true);
    }
  };

  return (
    <div className={styles.container}>
      <h2
        className={`${styles.passwordTxt} ${
          password !== "P4$5W0rD!" ? styles.activePassword : null
        }`}
      >
        {password}
      </h2>
      {copied && <h3 className={styles.copiedTxt}> copied</h3>}
      <div className={styles.copyBtnContainer}>
        <button
          className={styles.copyBtn}
          onClick={copyToClipboard}
          aria-label="copy button"
        ></button>
      </div>
    </div>
  );
};

export default PasswordContainer;
