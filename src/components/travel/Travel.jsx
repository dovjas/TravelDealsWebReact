import React from 'react'
import styles from  './Travel.module.css'
import TravelPic from '../../images/travel.jpg'

const Travel = () => {
  return (
    <div className={styles.travel}>
        <div className={styles.left}>
            <img src={TravelPic} alt="travel illustration"></img>
        </div>
        <div>
            <h2>Find your perfect destination <span> Lorem ipsum dolor sit amet consectetur adipisicing elit.  dolores quam omnis porro.</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sit excepturi est magni laudantium ullam, neque sequi repudiandae soluta dolore.</p>
            <button>Browse</button>
        </div>
    </div>
  )
}

export default Travel