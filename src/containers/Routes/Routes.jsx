import React,{useState} from "react";
import styles from "./Routes.module.scss";
import { Router } from "@reach/router";
import SafetyTypes from "../../components/SafetyTypes";
import ContactUs from "../../components/ContactUs"
import DashBoard from "../DashBoard";
import Home from "../../components/Home";
import NotFound from "../../components/NotFound";
import AccidentStates from "../AccidentStates"

const Routes = () => {
  const [progression, setProgression] = useState(0);


  const incrementHandler = () => {
      const incremented = progression + 1;
      setProgression(incremented);
      alert(`Number of Leads :${incremented}!!We will contact you soon.`);
  }
  return (
    <>
        <section className={styles.container}> 
      <Router>
      <Home path="/" />
      <DashBoard path="minesafety" />
      <AccidentStates path="accidentstates" />
      <SafetyTypes path="safetyeqipments" />
      <ContactUs path="contactus" incrementHandler={incrementHandler} />
      <NotFound default />
    </Router>
    </section>
    </>
    
  );
};

export default Routes;
