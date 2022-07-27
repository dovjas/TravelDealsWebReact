import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
<div className={styles.container}>
    <div className={styles.title}>
        <h1>Contact Us</h1>
    </div>
    <form>
        <div className={styles.formInputs}>
            <label htmlFor='username'>Name</label> 
            <input type="text" placeholder="Enter your name"></input> 
        </div>
        <div className={styles.formInputs}>
            <label htmlFor='email'>Email</label> 
            <input type="email" placeholder="Enter your email"></input> 
        </div>
        <div className={styles.formInputs}>
            <textarea rows="4" cols="50"></textarea>
        </div>
        <input type="submit" value="Submit"></input>
    </form>
</div>

  )
}

export default Contact