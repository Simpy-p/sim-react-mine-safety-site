import React, { useState , useEffect } from 'react';
import NavBar from "./components/NavBar";
import Routes from "./containers/Routes";
import styles from "./App.module.scss";


const App = () => {

  const [kanyeQuote,setKanyeQuote]=useState({})
  // https://api.kanye.rest/
  useEffect(()=>{
    fetch("https://api.kanye.rest/")
    .then(res=>res.json())
    .then(data=>setKanyeQuote(data))
    // .catch(err=>alert(err.message))
  },[]);

  return (
    <div>
         <>
         <section className={styles.container}>
        <NavBar />
      </section>
      <section className={styles.container}>
        <Routes />
      </section>
      <section className={styles.container}>
      <footer > </footer>
      <div className={styles.footer}>Daily Quotes: {kanyeQuote.quote}</div>
      </section>
    </>
    </div>
  )
}

export default App
