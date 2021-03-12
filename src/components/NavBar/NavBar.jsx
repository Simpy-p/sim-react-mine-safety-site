import React from "react";
import styles from "./NavBar.module.scss";
import Button from "../Button"
import { Link } from "@reach/router";
import logo from "../../Assets/Safety_first.jpeg";
import { FaRegListAlt } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className={styles.navFlex}>
            
        <div className={styles.navHeaderFlex}>
            <Link to="accidentstates">
        <img src={logo} alt="Logo" />
        </Link>
          <h1>SafetyFirst</h1>
        </div>
        <div className={styles.navOptionFlex}>
          <Link to="/">
            <h2>Home</h2>
          </Link>

          <Link to="minesafety">
          <h2>Mine Safety</h2>
          </Link>

          <Link to="safetyeqipments">
          <h2>Safety Equipments</h2>
          </Link>
          
         
          <Link to="contactus">
          <Button text="Contact"/>
          </Link>

          <FaRegListAlt size="40px" className={styles.list}/>
       

          </div>
    </nav>
  );
};

export default NavBar;
