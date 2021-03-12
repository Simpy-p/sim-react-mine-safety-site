import React,{useState} from "react";
import styles from "./ContactUs.module.scss";
import TopPanel from "../../components/TopPanel";
import DashboardData from "../../data/ContactUs";
import Button from "../Button"
import { HiOutlineMail } from "react-icons/hi";
import { BiMessageRounded } from "react-icons/bi";
const ContactUs = (props) => {

  const {incrementHandler}=props
 
  return (
    <>
       <TopPanel Data={DashboardData[0]}/> 
       <div className={styles.navFlex}>
       <div>
       <HiOutlineMail size="50px"/>
     
       <h3>Have any questions?</h3>
       <h3>xyv@safetyfirst.com</h3>
       </div>
       <div>
       <BiMessageRounded size="50px"/>
     
       <h3>Call Us</h3>
       <h3>+91 (0) 123456789</h3>
       </div>
      
       <form>
      <fieldset className={styles.fi}>
      <label><br/></label>  <label><br/></label>
         <label>Name</label>
           <input name="name" />
           <label><br/></label>  <label><br/></label>
           <label>Email Address</label>
           <input Email="email address" />
           <label><br/></label>  <label><br/></label>
             <Button text="Submit" clicked={incrementHandler}/>
           
             <Button text="Clear"/>
           <label><br/></label>  <label><br/></label>
           
        
       </fieldset>
      
      </form>
      </div>
    </>
  );
};

export default ContactUs;
