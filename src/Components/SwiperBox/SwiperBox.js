import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

import "./Swipercss.css";
import "swiper/swiper-bundle.css";
import img1 from "../../img/product_test_img.png";

SwiperCore.use([Navigation, Pagination]);

const SwiperBox = () => {
  return (
    <>
      <div className='swiper-container'>
        <div className='swiper-wrapper'>
          <Swiper tag='section' wrapperTag='ul' id='main' navigation pagination>
            <SwiperSlide tag='li' key={1}>
              <div className='swiper_img_container'>
                <img src={img1} className='swiper_img' alt='img' />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default SwiperBox;
