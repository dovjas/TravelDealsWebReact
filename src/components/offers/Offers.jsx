import React from 'react'
import styles from './Offers.module.css'


const Offers = () => {
  return (
    <div className={styles.offers} id='offers'>
        <div className={styles.heading}>
            <h2>Hot Offers</h2>
            <div className={styles.textBg}>
                <p>
                    <span>Select from the most popular destinations</span>
                </p>
            </div>
        </div>
        <div className={styles.offersContainer}>
            <div className={styles.offersCard}>
                <img src="https://img.freepik.com/premium-vector/sale-special-offer-price-tags-design_1588-573.jpg?w=740"></img>
                <div className={styles.content}>
                    <h3>Offer 1</h3>
                </div>
            </div>
            <div className={styles.offersCard}>
                <img src="https://img.freepik.com/premium-vector/sale-special-offer-price-tags-design_1588-573.jpg?w=740"></img>
                <div className={styles.content}>
                    <h3>Offer 2</h3>
                </div>
            </div>
            <div className={styles.offersCard}>
                <img src="https://img.freepik.com/premium-vector/sale-special-offer-price-tags-design_1588-573.jpg?w=740"></img>
                <div className={styles.content}>
                    <h3>Offer 3</h3>
                </div>
            </div>
            <div className={styles.offersCard}>
                <img src="https://img.freepik.com/premium-vector/sale-special-offer-price-tags-design_1588-573.jpg?w=740"></img>
                <div className={styles.content}>
                    <h3>Offer 4</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Offers