import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import slide_image_1 from "../images/image1.jpg";
import slide_image_2 from "../images/image2.jpg";
import slide_image_3 from "../images/image3.jpg";
import slide_image_4 from "../images/image4.jpg";
import slide_image_5 from "../images/image5.jpg";
import slide_image_6 from "../images/image6.jpg";

const Itemmmm = () => {
  return (
    <div className="container">
      <h1 className="heading">Bicycle</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPreview={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image"></img>\
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image"></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Itemmmm;
