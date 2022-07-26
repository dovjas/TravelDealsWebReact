import React from 'react'
import styles from './Destinations.module.css'
import Card from './Card'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagiation, Scrollbar, Ally} from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'


const Destinations = () => {
  return (
    <div className={styles.destinations}>
        <div className={styles.mainTitle}>
            <h1>Find your destinations</h1>
            <div className={styles.subTitleText}>
                <p>
                    <span>Explore the world's most exciting places</span>
                </p>
            </div>
        </div>
        <div className={styles.slider}>
        <Swiper
            spaceBetween={50}
            slidesPerView={5}
            navigation
            breakpoints={{
                320: {
                    slidesPerView: 2,
                    spaceBetween: 20
                  },
                  // when window width is >= 480px
                  480: {
                    slidesPerView: 3,
                    spaceBetween: 30
                  },
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 4,
                    spaceBetween: 40
                  }
            }

            }
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <Card />
            </SwiperSlide>
        </Swiper>
        </div>
    </div>
  )
}

export default Destinations