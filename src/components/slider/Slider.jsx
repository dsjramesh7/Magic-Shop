import React from "react";
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { SliderProducts } from "../../data/products";

//import swiper styles here
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Slider = () => {
  return (
    <div className="s-container">
      <Swiper
        modules={[Pagination, Navigation]}
        navigation={true}
        loopFillGroupWithBlank={true}
        slidesPerView={3}
        slidesPerGroup={1}
        spaceBetween={40}
        loop={true}
        breakpoints={{
          856: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {SliderProducts && SliderProducts.length > 0 ? (
          SliderProducts.map((sitem, i) => (
            <SwiperSlide key={i}>
              <div className="left-s">
                <div className="name">
                  <span>{sitem.name}</span>
                  <span>{sitem.detail}</span>
                </div>
                <span>{sitem.price}₹</span>
                <div>Shop now</div>
              </div>
              <img
                className="img-p"
                src={sitem.img}
                alt="product"
                height={100}
              />
            </SwiperSlide>
          ))
        ) : (
          <div>No data fetched</div>
        )}
      </Swiper>
    </div>
  );
};

export default Slider;
