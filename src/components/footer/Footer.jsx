import React from 'react'
import styles from './Footer.module.css'
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import {Link} from 'react-scroll'

const Footer = () => {
  return (
    <div  className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.companyContainer}>
                <h2>Company</h2>
                    <ul>
                      <li>
                        <Link to="hero" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
                      </li> 
                      <li>
                        <Link to="destinations" spy={true} smooth={true} offset={50} duration={500}>Destinations</Link>
                      </li>
                      <li> 
                        <Link to="offers" spy={true} smooth={true} offset={50} duration={500}>Offers</Link>
                      </li>
                      <li>  
                        <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
                      </li>
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