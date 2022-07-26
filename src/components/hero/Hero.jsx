import React from "react";
import styles from './Hero.module.css'
import { AiOutlineSearch } from "react-icons/ai";

const Hero = ()=> {
  return (
    <div className={styles.hero}>
        <form>
            <div className={styles.location}>
                <label>Location</label>
                <input type="text" placeholder="Find your destination"></input>
            </div>
            <div className={styles.from}>
                <span className={styles.border}></span>
                <label>From</label>
                <input type="date"></input>
            </div>            
            <div className={styles.until}>
                <span className={styles.border}></span>
                <label>Until</label>
                <input type="date"></input>
            </div>            
            <div className={styles.searchBtn}>
                {/* <button>Search</button> */}
                </div>                        
        </form>
    </div>
  )
}

export default Hero