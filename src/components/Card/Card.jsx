import React from "react";
import styles from "./Card.module.scss";
import Button from "../Button";

const Card = (props) => {

  // const shortenInstructions = (instructions) =>
  // instructions.length < 300
  //   ? instructions
  //   : instructions.substring(0, 200) + "...";

  const {
    Type,
    SubType,
    strArea,
    strInstructions,
    strImage,
    strYoutube,
    Tags

  }=props.safety
    {/* style={{ backgroundImage: `url(${})` }} */}
  return (
    <div className={styles.card}>
      <img src={strImage} alt="test" />
      <section className={styles.cardDetails}>
      <h2>{Type}</h2>
      <h2>{SubType}</h2>
        <p>
        <p>{strInstructions}</p>
          <span>Mine Location:{strArea}</span>
        </p>
        {/* <div className={styles.links}> */}
          <a href={strYoutube} target="_blank" rel="noopener noreferrer">Reference Link
          </a>
          <ul>Safety Equipments:{Tags.map((tag => (<li>{tag}</li>)))}</ul>
          <Button text="More Info"/>
        {/* </div> */}
       
      </section>
   
    </div>
  );
};

export default Card;
