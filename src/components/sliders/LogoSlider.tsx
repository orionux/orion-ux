/* eslint-disable react/jsx-key */
import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

const LogoSlider = () => {
  const slideImages = [
    { id: 1, path: "/assests/images/logo (1).png" },
    { id: 2, path: "/assests/images/logo (2).png" },
    { id: 3, path: "/assests/images/logo (3).png" },
    { id: 4, path: "/assests/images/logo (4).png" },
    { id: 5, path: "/assests/images/logo (5).png" },
    { id: 6, path: "/assests/images/logo (6).png" },
    { id: 7, path: "/assests/images/logo (7).png" },
    { id: 8, path: "/assests/images/logo (8).png" },
    { id: 9, path: "/assests/images/logo (9).png" },
    { id: 10, path: "/assests/images/logo (10).png" },
  ];
  return (
    <div className="py-5">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={5}
        //   navigation
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        speed={5000}
        loop={true}
        //   pagination={{ clickable: true }}
        //   scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {slideImages.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="d-flex justify-content-center align-items-center">
              <Image
                src={item.path}
                alt=""
                width={150}
                height={150}
                className="img-fluid"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoSlider;
