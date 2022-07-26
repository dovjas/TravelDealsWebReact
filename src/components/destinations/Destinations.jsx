import React from 'react'
import styles from './Destinations.module.css'
import Card from './Card'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper'
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
            modules={[Navigation,Pagination,Scrollbar,A11y]}
            spaceBetween={10}
            slidesPerView={3}
            navigation
            breakpoints={{
                320: {
                    slidesPerView: 2,
                    spaceBetween: 20
                  },
                  // when window width is >= 480px
                  480: {
                    slidesPerView: 2,
                    spaceBetween: 20
                  },
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 4,
                    spaceBetween: 20
                  }
            }

            }
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <Card image='https://images.unsplash.com/photo-1523510808004-1c4b59b5db2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                make='pyramid' />
            </SwiperSlide>
            <SwiperSlide>
                <Card image='https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                make='london' />
            </SwiperSlide>
            <SwiperSlide>
                <Card image='https://images.unsplash.com/photo-1547483029-77784da27709?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
                make='tel aviv' />
            </SwiperSlide>
            <SwiperSlide>
                <Card image='https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                make='barcelona' />
            </SwiperSlide>
            <SwiperSlide>
                <Card image='https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                make='dubai' />
            </SwiperSlide>
            <SwiperSlide>
                <Card image='https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                make='tokyo' />
            </SwiperSlide>
        </Swiper>
        </div>
    </div>
  )
}

export default Destinations