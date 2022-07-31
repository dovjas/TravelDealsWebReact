import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div  className={styles.footer}>
        <div className={styles.container}>
            <h2>Company</h2>
            <ul>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Destinations</a></li>
                <li><a href='#'>Offers</a></li>
                <li><a href='#'>Careers</a></li>

            </ul>
            <div className={styles.container}>
            <h2>Social</h2>
            <ul>
                <li><a href='#'>Link</a></li>
                <li><a href='#'>Link</a></li>
                <li><a href='#'>Link</a></li>
            </ul>
            <div className={styles.container}>
            <h2>Subsribe to our newsletter</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <div className={styles.subsribe}>
                <input type='email' placeholder='Enter your email'></input>
                <button>Subscribe</button>
            </div>
            </div>
           
        </div>
        </div>
    </div>
  )
}

export default Footer