import React from "react";
import tstyle from "./Testimonial.module.css";
import Hero from "../../assets/testimonialHero.png";
import { TestimonialsData } from "../../data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = () => {
  return (
    <div className={tstyle.testimonial}>
      <div className={tstyle.wrapper}>
        <div className={tstyle.container}>
          <span>Top Rated</span>
          <span>Customers affection on this products</span>
        </div>

        <img src={Hero} alt="" />

        <div className={tstyle.container}>
          <span>100k</span>
          <span>Happy Customers With Us</span>
        </div>
      </div>

      <div className={tstyle.reviews}>Reviews</div>

      <div className={tstyle.carousel}>
        <Swiper
          slidesPerGroup={1}
          slidesPerView={3}
          spaceBetween={20}
          className={tstyle.tcarousel}
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
          {TestimonialsData.map((testimonial, i) => (
            <SwiperSlide key={i}>
              <div className={tstyle.testimonials}>
                <img src={testimonial.image} alt="user" />
                <span>{testimonial.comment}</span>
                <hr style={{ border: "0.5px solid red", width: "80%" }} />
                <span>{testimonial.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
