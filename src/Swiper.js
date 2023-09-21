import "./swiper.css";
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './App.css'

const Sw = () => {
  const swiperStyle = {
    position : "relative",
    width : "940px",
    height : "300px",
    cursor : "pointer",
    marginTop : "2rem",
    boxShadow: "0 1px 18px 10px rgba(0, 0, 0, 0.25)",
    borderRadius:'10px',
  }
  const SwiperSlideStyle = {
    // width: "100%",
    borderRadius : "20px",
    // margin : "10px"
  }
return (
  <div className="classes">
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={0}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 3500, disableOnInteraction: false }}
    loop={true}
    // scrollbar={{ draggable: true }}
    style={swiperStyle}
  >
      <SwiperSlide style={SwiperSlideStyle}>
        <img src={process.env.PUBLIC_URL + '/img' + '/' + '/banner' + '/'  + 'banner01' + '.png'}
        style={{width: '100%',
         backgroundSize:"cover",
         backgroundPosition : 'center',
         borderRadius:'10px',
         }} />
      </SwiperSlide>
      <SwiperSlide style={SwiperSlideStyle}>
        <img src={process.env.PUBLIC_URL + '/img' + '/' + '/banner' + '/'  + 'banner02' + '.png'}
        style={{width: '100%',
         backgroundSize:"cover",
         backgroundPosition : 'center',
         borderRadius:'10px',
         }} />
      </SwiperSlide>
      <SwiperSlide style={SwiperSlideStyle}>
        <img src={process.env.PUBLIC_URL + '/img' + '/' + '/banner' + '/'  + 'banner03' + '.png'}
        style={{width: '100%',
         backgroundSize:"cover",
         backgroundPosition : 'center',
         borderRadius:'10px',
         }} />
      </SwiperSlide>
      <SwiperSlide style={SwiperSlideStyle}>
        <img src={process.env.PUBLIC_URL + '/img' + '/' + '/banner' + '/'  + 'banner04' + '.png'}
        style={{width: '100%',
         backgroundSize:"cover",
         backgroundPosition : 'center',
         borderRadius:'10px',
         }} />
      </SwiperSlide>
      <SwiperSlide style={SwiperSlideStyle}>
        <img src={process.env.PUBLIC_URL + '/img' + '/' + '/banner' + '/'  + 'banner05' + '.png'}
        style={{width: '100%',
         backgroundSize:"cover",
         backgroundPosition : 'center',
         borderRadius:'10px',
         }} />
      </SwiperSlide>
  </Swiper>
  </div>
);
};
export default Sw;