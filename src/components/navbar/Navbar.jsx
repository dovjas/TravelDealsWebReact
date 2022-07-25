import React from 'react'
import styles from './Navbar.css'
import {AiOutlineMenu,AiOutlineClose,AiOutlineSearch,AiOutlineUser} from 'react-icons/ai'


const Navbar = () => {
  return (
    <header className={styles.navbar}>
        <h2>LOGO</h2>
        <nav>
          <ul className={styles.menu}>
            <li>
              <a href='#'>About Us</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
            <li>
              <a href='#'>Log In</a>
            </li>
            <li>
              <a href='#'>Sign Up</a>
            </li>
            <li>
              <AiOutlineSearch />
            </li>
            <li>
              <AiOutlineUser />
            </li>
          </ul>
        </nav>
        <div className={styles.mobileBtn}>
          <AiOutlineMenu />
        </div>
    </header>
  )
}

export default Navbar