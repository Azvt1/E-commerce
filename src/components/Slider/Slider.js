import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Slider.css";
import "swiper/css/effect-coverflow";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper/modules";

export const Slider = ({ slides }) => {
  return (
    <div className="Swiper-container">
      <Swiper
        effect={"coverflow"}
        className="mySwiper"
        modules={[Navigation, Pagination, A11y, Pagination, EffectCoverflow]}
        spaceBetween={50}
        glabCursor={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide">
              <img
                src={slide.image}
                alt="cloth photo"
                className="slide-image"
              />
              <div className="slider-info">
                <h3>{slide.title.toUpperCase()}</h3>
                <p>{slide.description}</p>
                <a href="/shop">Discover more!</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
