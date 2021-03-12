import React from "react";
import styles from "./Button.module.scss";

const Button = (props) => {
  const { text,clicked } = props;
  return (
    <>
      <button onClick={clicked} className={styles.bt}>
      {text || "submit"}
      </button>
    </>
  );
};

export default Button;
