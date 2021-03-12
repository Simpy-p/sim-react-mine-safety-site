import React from "react";
import styles from "./SafetyTypes.module.scss";
import TopPanel from "../../components/TopPanel";
import DashboardData from "../../data/SafetyEquipmentData"

const SafetyTypes = () => {
  return (
    <>
          <TopPanel Data={DashboardData[0]}/> 
    </>
  );
};

export default SafetyTypes;
