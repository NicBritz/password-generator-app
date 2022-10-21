import styles from "../styles/PasswordForm.module.css";
import Slider from "./slider";
import CheckboxContainer from "./checkboxContainer";
import Strength from "./strength";
import GenerateButton from "./generateButton";
import { useState, useEffect } from "react";
import { Lowercase, Uppercase, Numbers, Symbols } from "../lib/data.js";

const PasswordForm = ({ updatePassword }) => {
  const [checkedSelection, setCheckedSelection] = useState([]);
  const [strength, setStrength] = useState(-1);
  const [length, setLength] = useState(10);

  const updateLength = (v) => {
    setLength(v);
  };

  const updateSelectionArr = (arr) => {
    setCheckedSelection(arr);
  };

  const generatePassword = () => {
    const pwArray = [];
    const passwordA = [];

    setStrength(checkedSelection.length - 1);

    checkedSelection.forEach((element) => {
      if (element === "uppercase") {
        pwArray = [...pwArray, ...Uppercase];
      }
      if (element === "lowercase") {
        pwArray = [...pwArray, ...Lowercase];
      }
      if (element === "numbers") {
        pwArray = [...pwArray, ...Numbers];
      }
      if (element === "symbols") {
        pwArray = [...pwArray, ...Symbols];
      }
    });

    for (let i = 0; i < length; i++) {
      passwordA.push(pwArray[Math.floor(Math.random() * pwArray.length)]);
    }
    updatePassword(passwordA.join(""));
  };
  return (
    <div className={styles.container}>
      <Slider updateLength={updateLength} length={length} />
      <CheckboxContainer updateSelectionArr={updateSelectionArr} />
      <Strength strength={strength} />
      <GenerateButton generatePassword={generatePassword} />
    </div>
  );
};

export default PasswordForm;
