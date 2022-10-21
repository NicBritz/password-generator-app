import styles from "../styles/CheckboxContainer.module.css";
import Checkbox from "./checkbox";
import { useState } from "react";

const CheckboxContainer = ({ updateSelectionArr }) => {
  const [checkedArr, setCheckedArr] = useState([]);
  const updateSelection = (name, checked) => {
    if (checked) {
      checkedArr.push(name);
      updateSelectionArr(checkedArr);
    } else {
      let i = checkedArr.findIndex((n) => n === name);
      checkedArr.splice(i, 1);
      updateSelectionArr(checkedArr);
    }
  };
  return (
    <div className={styles.container}>
      <Checkbox name="uppercase" updateSelection={updateSelection}>
        Include Uppercase Letters
      </Checkbox>
      <Checkbox name="lowercase" updateSelection={updateSelection}>
        Include Lowercase Letters
      </Checkbox>
      <Checkbox name="numbers" updateSelection={updateSelection}>
        Include Numbers
      </Checkbox>
      <Checkbox name="symbols" updateSelection={updateSelection}>
        Include Symbols
      </Checkbox>
    </div>
  );
};

export default CheckboxContainer;
