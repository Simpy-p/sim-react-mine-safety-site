import React, {useState} from "react";
import styles from "./AccidentStates.module.scss";
import accidentData from "../../data/AccidentData";
import DashboardData from "../../data/SafetyStats";
import Monthly from "../../components/Monthly";
import Yearly from "../../components/Yearly";
import TopPanel from "../../components/TopPanel";


const AccidentStates = () => {
  const [isFaceDown, setIsFaceDown] = useState(false);
  const flipStyles = isFaceDown ? styles.faceDown : "";
  
  const getAccCardJsx = (accidentData) => (
    <div className={styles.card} >
        <section
        className={`${styles.accCard} ${flipStyles}`}
        >
        <div className={styles.front}>
          <Monthly accidentData={accidentData} />
        </div>
        <div className={styles.back}>
          <Yearly accidentData={accidentData} />
        </div>
        </section>
        </div>
  );

  return (
    <span>
        
   
    <section className={styles.container} onClick={() => setIsFaceDown(!isFaceDown)} > 
    <TopPanel Data={DashboardData[0]}/> 
    <div className={styles.cards} >
    {accidentData.map(getAccCardJsx)}
    </div>
    </section>
    
    </span>
  );
};

export default AccidentStates;
