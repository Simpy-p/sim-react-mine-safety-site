import React from "react";
import styles from "./Home.module.scss";
import TopPanel from "../../components/TopPanel";
import DashboardData from "../../data/Home"

const Home = () => {
  return (
    <>
    <span>
          <TopPanel Data={DashboardData[0]}/> 
    </span>
    </>
  );
};

export default Home;
