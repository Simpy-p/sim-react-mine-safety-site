import React from "react";
import styles from "./Yearly.module.scss";

const Yearly = (props) => {
  
  const {
    Type,
    Yearly,
    strImage,
    FatalYearly,
    MinorYearly,
    strInstruction,
  }=props.accidentData
    {/* style={{ backgroundImage: `url(${})` }} */}
  return (
    <div className={styles.cardBack}>
        <img src={strImage} alt="test" />
      <h2>Yearly Stats: </h2>
        <h3>{Type}</h3>
      <h3>No of Accidents:{FatalYearly}</h3>
      <h3>Fatal Accidents:{MinorYearly}</h3>
      <p>Accidents Stats:{strInstruction}</p>
   </div>
  );
};

export default Yearly;
