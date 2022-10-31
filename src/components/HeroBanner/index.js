import React from "react";

import SwiperCore, {
  Pagination,
  EffectCoverflow,
  EffectCube,
  Autoplay,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

import sliderBg2 from "./../../assets/img/IMG_3078.jpg";

SwiperCore.use([Pagination, Autoplay, EffectCoverflow, EffectCube]);

const params = {
  loop: true,
  speed: 800,
  autoplay: { delay: 6000 },
  pagination: { clickable: true, dynamicBullets: true, type: "progressbar" },
};

export default function Slider() {
  return (
    <section className="slider">
      <Swiper spaceBetween={50} centeredSlides {...params}>
        <SwiperSlide>
          <img src={sliderBg2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderBg2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderBg2} alt="" />
        </SwiperSlide>
        <div className="swiper-pagination"></div>
      </Swiper>

      <div className="slider__skewmask">
        <div className="slider__skewmask-block"></div>
      </div>
    </section>
  );
}
