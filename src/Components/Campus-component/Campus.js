import './CampusStyles.css';

import { Navigation, Pagination, Scrollbar, Ally } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import BuildingCard from './BuildingCard';



export default function Campus () {
    return(
        <>
        <div className="campus-wrap">
            <div className="campus-container">
                <div className="heading">
                    <h1>Campus</h1>
                </div>
                <div className="campus-slider">
                    <Swiper
                    modules={[Navigation, Pagination, Scrollbar]}
                    spaceBetween={50}
                    slidesPerView={2}
                    navigation={true}
                    pagination={true}
                    
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className='campus-swiper'
                    >
                        <SwiperSlide className='slide'><BuildingCard/></SwiperSlide>
                        <SwiperSlide className='slide'><BuildingCard/></SwiperSlide>
                        <SwiperSlide className='slide'><BuildingCard/></SwiperSlide>
                        <SwiperSlide className='slide'><BuildingCard/></SwiperSlide>
                        <SwiperSlide className='slide'><BuildingCard/></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
        </>
    )
}
