import React from 'react'
import styles from './Navbar.module.css'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [nav, setNav] = useState(false)


  return (
    <header className={styles.navbar}>
        <h2>LOGO</h2>
        <nav>
          <ul className={nav? [styles.menu, styles.active].join(' '): [styles.menu]}>
            <li>
              <a href='#'>Destinations</a>
            </li>
            <li>
              <a href='#'>Information</a>
            </li>
            <li>
              <a href='#'>Offers</a>
            </li>
            <li>
              <a href='#'>Contact</a>
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