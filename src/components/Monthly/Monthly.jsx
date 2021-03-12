import React from "react";
import styles from "./Monthly.module.scss";

const Monthly = (props) => {
  
  const {
    Type,
      NoOfaccident,
      FatalMonthly,
      Minor,
      strImage,
  }=props.accidentData
    {/* style={{ backgroundImage: `url(${})` }} */}
  return (
    <div className={styles.cardFront}>
      <img src={strImage} alt="test" />
      <div className={styles.accDetails }>
      <h2>Monthly Stats</h2>
      <h3>{Type}</h3>
      <h3>No of Accidents: {NoOfaccident}</h3>
      <h3>Fatal Accidents: {FatalMonthly}</h3>
      <h3>Minor Accidents: {Minor}</h3>
   
   </div>
    </div>
        );
};

export default Monthly;
