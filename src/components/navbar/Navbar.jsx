import React from 'react'
import styles from './Navbar.module.css'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import { useState, useEffect } from 'react'
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)


  return (
    <header className={styles.navbar}>
        <h2>LOGO</h2>
        <nav>
          <ul className={nav? [styles.menu, styles.active].join(' '): [styles.menu]}>
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
        </nav>
        <div className={styles.mobileBtn} onClick={()=>setNav(!nav)}>
          { nav? <AiOutlineClose/> : <AiOutlineMenu/>}
        </div>
    </header>
  )
}

export default Navbar