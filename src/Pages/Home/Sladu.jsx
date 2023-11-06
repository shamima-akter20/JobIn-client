// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';



const Sladu = () => {
   
    return (
        <div className=''>
          <Swiper 
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper " >
         
            <SwiperSlide><img src="https://i.ibb.co/vh13rjS/f10.jpg" className="w-full" /></SwiperSlide>
            <SwiperSlide><img src="https://i.ibb.co/hMj6wH5/f9.jpg " className="w-full" /></SwiperSlide>
            <SwiperSlide><img src="https://i.ibb.co/ZzbncqK/f8.jpg " className="w-full" /></SwiperSlide>
            <SwiperSlide><img src="https://i.ibb.co/Wpry37T/f7.jpg" className="w-full" /></SwiperSlide>
            <SwiperSlide><img src="https://i.ibb.co/NY2rDXR/f6.jpg" className="w-full" /></SwiperSlide>
            <SwiperSlide><img src="https://i.ibb.co/qR43HyL/f5.jpg" className="w-full" /></SwiperSlide>
            <SwiperSlide><img src="https://i.ibb.co/YD2Tqp0/f4.jpg " className="w-full" /></SwiperSlide>
            <SwiperSlide><img src="https://i.ibb.co/zH0h0pF/f3.jpg" className="w-full" /></SwiperSlide>
            <SwiperSlide><img src="https://i.ibb.co/4KcHdsB/f2.jpg " className="w-full" /></SwiperSlide>
          </Swiper>
        </div>
      );
};

export default Sladu;