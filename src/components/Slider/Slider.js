import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Slider.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

export const Slider = ({ slides }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="slide">
            <img src={slide.image} alt="cloth photo" />
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
