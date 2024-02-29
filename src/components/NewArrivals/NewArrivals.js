import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./NewArrivals.css";

import { useState, useEffect } from "react";

import { Navigation, Pagination } from "swiper/modules";
export default function NewArrivals({ newArrivals, sliderTitle, linkTitle }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [newArrivals]);

  if (!isVisible) {
    return null;
  }
  return (
    <div className="main_container">
      <div className="swiper_title">
        <h1>{sliderTitle}</h1>
        <div className="view_products_link">
          <a href="/">{linkTitle}</a>
        </div>
      </div>
      <Swiper
        slidesPerView={3}
        navigation={true}
        spaceBetween={10}
        pagination={{
          type: "fraction",
        }}
        loop={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {newArrivals.map((item, id) => (
          <SwiperSlide key={id}>
            <div className="slide_container">
              <img src={item.image} alt="cloth" className="slider_photo" />
              <div className="text_information">
                <h3>{item.title}</h3>
                <p>${item.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
