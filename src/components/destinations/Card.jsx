import React from 'react'
import styles from './Destinations.module.css'


const Card = ({image,make}) => {
  return (
    <div className={styles.card}>
      <img src={image} alt=''></img>
      <p>{make}</p>
    </div>
  )
}

export default Card