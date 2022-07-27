import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
<div className={styles.container}>
    <div className={styles.title}>
        <h1>Contact Us</h1>
        <div className={styles.banner}>
            <img src='https://img.freepik.com/free-vector/email-marketing-internet-chatting-24-hours-support_335657-3009.jpg?w=740&t=st=1658947679~exp=1658948279~hmac=428acd12c5b120c6fac89ae8d13b98c94d91271e97ef3f866349d46ea8c5673f'></img>
    </div>
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
        <button type="submit">Submit</button>
    </form>
</div>

  )
}

export default Contact