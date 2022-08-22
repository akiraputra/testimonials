import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Ernest Maya",
    review: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam recusandae in neque atque ad soluta labore vel facere, iusto reiciendis iure voluptates illo commodi dolorum explicabo officia eius. Atque, repellat?",
  },
  {
    avatar: AVTR2,
    name: "Alexis Sanchez",
    review: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam recusandae in neque atque ad soluta labore vel facere, iusto reiciendis iure voluptates illo commodi dolorum explicabo officia eius. Atque, repellat?",
  },
  {
    avatar: AVTR3,
    name: "Arnold Drinkwater",
    review: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam recusandae in neque atque ad soluta labore vel facere, iusto reiciendis iure voluptates illo commodi dolorum explicabo officia eius. Atque, repellat?",
  },
  {
    avatar: AVTR4,
    name: "Nabilah Lisa",
    review: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam recusandae in neque atque ad soluta labore vel facere, iusto reiciendis iure voluptates illo commodi dolorum explicabo officia eius. Atque, repellat?",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
