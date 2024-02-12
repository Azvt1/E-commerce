import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import guyInHat from "../../assets/img/guyInAHat.jpeg";
import ladyInDress from "../../assets/img/LadiInAdress.jpeg";
import ladyWithShortHaircut from "../../assets/img/LadyShortHaircut.jpeg";
import ladyInAHat from "../../assets/img/LadyInHat.jpeg";

import "./NewArrivals.css";

import { Navigation, Pagination } from "swiper/modules";

const arrivals = [
  {
    id: 1,
    img: guyInHat,
    title: "HANDMADE CROP SWEATER",
    price: "54.00",
  },
  {
    id: 2,
    img: ladyInDress,
    title: "DARK FLORISH ONEPIECE",
    price: "95.00",
  },
  {
    id: 3,
    img: ladyWithShortHaircut,
    title: "BAGGY SHIRT",
    price: "56.00",
  },
  {
    id: 4,
    img: ladyInAHat,
    title: "COTTON OFF-WHITE SHIRT",
    price: "65.00",
  },
];

export default function NewArrivals() {
  return (
    <div className="main_container">
      <div className="swiper_title">
        <h1>OUR NEW ARRIVALS</h1>
        <div className="view_products_link">
          <a href="/">View all products</a>
        </div>
      </div>
      <Swiper
        slidesPerView={3}
        navigation={true}
        spaceBetween={50}
        pagination={{
          type: "fraction",
        }}
        loop={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {arrivals.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="slide_container">
              <img src={item.img} alt="cloth" className="slider_photo" />
              <div className="text_information">
                <h3>{item.title}</h3>
                <p>${item.price}</p>
              </div>
              {console.log(item)}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
