import React from "react";
import styles from "./DashBoard.module.scss";
import safety from "../../data/SafetyData";
import DashboardData from "../../data/Dashboard";
import Card from "../../components/Card";
import TopPanel from "../../components/TopPanel/TopPanel";

const DashBoard = () => {
  const getCardJsx = (safety) => (
    <div  key={safety.id}>
      <Card safety={safety} />
    </div>
  );

  return (
    <span>
        
   
    <section className={styles.container}> 
    <TopPanel Data={DashboardData[0]}/> 
    {safety.map(getCardJsx)}</section>
    </span>
  );

};

export default DashBoard;
