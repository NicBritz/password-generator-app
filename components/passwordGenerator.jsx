import styles from "../styles/PasswordGenerator.module.css";
import PasswordContainer from "./passwordContainer";
import PasswordForm from "./passwordForm";
import { useState } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("P4$5W0rD!");
  const updatePassword = (password) => {
    setPassword(password);
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Password Generator</h1>
      <PasswordContainer password={password} />
      <PasswordForm updatePassword={updatePassword} />
    </div>
  );
};

export default PasswordGenerator;
