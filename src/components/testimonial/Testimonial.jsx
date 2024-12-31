import React from "react";
import css from "./Testimonial.module.css";
import Thero from "../../assets/testimonialHero.png";
import { TestimonialsData } from "../../data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = () => {
  // console.log(TestimonialsData);
  return (
    <div className={css.testimonials}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <span>Top Rated</span>
          <span>
            SEEDILY SAY HAS SUITABLE DISPOSAL AND BOY. EXERCISE JOY MAN CHILDREN
            REJOICED.
          </span>
        </div>

        <img src={Thero} alt="sherisherilady" />

        <div className={css.container}>
          <span>69k</span>
          <span>Happy Customers</span>
        </div>
      </div>

      <div className={css.reviews}>Reviews</div>

      <div className={css.caruosel}>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
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
          className={css.tCaruosel}
        >
          {TestimonialsData.map((rw) => (
            <SwiperSlide>
              <div className={css.reviewcard}>
                <img src={rw.image} alt="person" />
                <span>{rw.comment}</span>
                <hr />
                <span>{rw.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
