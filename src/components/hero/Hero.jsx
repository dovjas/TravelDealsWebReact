import React from "react";
import styles from './Hero.module.css'
import { AiOutlineSearch } from "react-icons/ai";

const Hero = ()=> {
  return (
    <div className={styles.hero}>
        <form>
            <div className={styles.location}>
                <label>LOCATION</label>
                <input className={styles.inputText} type="text" placeholder="Find your destination"></input>
            </div>
            <div className={styles.from}>
                <span className={styles.border}></span>
                <label>FROM</label>
                <input type="date"></input>
            </div>            
            <div className={styles.until}>
                <span className={styles.border}></span>
                <label>UNTIL</label>
                <input type="date"></input>
            </div>            
            <div className={styles.searchBtnDiv}>
                <button className={styles.heroBtn}>Search</button>
            </div>                        
        </form>
    </div>
  )
}

export default Hero