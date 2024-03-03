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
  Autoplay,
} from "swiper/modules";

export const Slider = ({ testData, withImages }) => {
  if (!testData || testData.length === 0) {
    return null;
  }
  if (withImages) {
    return (
      <div className="Swiper-container">
        <Swiper
          effect={"coverflow"}
          className="mySwiper"
          loop={true}
          modules={[
            Navigation,
            Pagination,
            A11y,
            Pagination,
            EffectCoverflow,
            Autoplay,
          ]}
          spaceBetween={50}
          grabCursor={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log("that was supposed to log swiper")}
        >
          {testData.map((slide, id) => (
            <SwiperSlide key={id}>
              <div className="slide">
                <img src={slide.image} alt="cloth" className="slide-image" />
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
  } else {
    return (
      <div className="Swiper-container2">
        <Swiper
          className="mySwiper"
          loop={true}
          modules={[Navigation, Pagination, A11y, Pagination, Autoplay]}
          spaceBetween={50}
          grabCursor={true}
          slidesPerView={3}
          // autoplay={{
          //   delay: 10000,
          //   disableOnInteraction: false,
          // }}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log("that was supposed to log swiper")}
        >
          {testData.map((slide, id) => (
            <SwiperSlide key={id}>
              <div className="slide2">
                <div className="slider-info2">
                  <h2 className="description2">{slide.text.toUpperCase()}</h2>
                  <div className="topic2">
                    <span>{slide.topic}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
};
