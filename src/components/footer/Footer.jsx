import React from 'react'
import styles from './Footer.module.css'
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div  className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.companyContainer}>
                <h2>Company</h2>
                    <ul>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Destinations</a></li>
                        <li><a href='#'>Offers</a></li>
                        <li><a href='#'>Careers</a></li>
                    </ul>
                    </div>
                <div className={styles.socialContainer}>
                    <h2>Social</h2>
                    <ul>
                        <BsFacebook style={{marginBottom:'5px',fontSize:'1.2rem', color:'green'}}><li><a href='#'>Link</a></li></BsFacebook> 
                        <BsInstagram style={{marginBottom:'5px',fontSize:'1.2rem'}}><li><a href='#'>Link</a></li></BsInstagram>
                        <BsLinkedin style={{fontSize:'1.2rem'}} ><li><a href='#'>Link</a></li></BsLinkedin>   
                    </ul>
                </div>        
                <div className={styles.subsContainer}>
                    <h2>Subsribe to our newsletter</h2>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <div className={styles.subsribe}>
                        <input type='email' placeholder='Enter your email'></input>
                    </div>
                        <button>Subscribe</button>
                </div>
            </div>
    </div>
  )
}

export default Footer