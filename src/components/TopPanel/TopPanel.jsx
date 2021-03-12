import React from "react";
import styles from "./TopPanel.module.scss";
import Assets from "./"


const TopPanel = (props) => {

  const {
    Quote,
    strDescription,
    strImage
  }=props.Data
 {/* style={{ backgroundImage: `url(${})` }} */}
 return (
  <div className={styles.card} style={{ backgroundImage: `url(${strImage})` }} >
    <section className={styles.cardDetails}>
      <br/>
      <br/>
    <h2>{Quote}</h2>
    <h2>{strDescription}</h2>
    </section>
    </div>
  );
 };


export default TopPanel;
