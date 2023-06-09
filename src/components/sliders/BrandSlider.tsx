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

const BrandSlider = () => {
  const slideImages = [
    { id: 1, path: "/assests/images/brand (1).png" },
    { id: 2, path: "/assests/images/brand (2).png" },
    { id: 3, path: "/assests/images/brand (3).png" },
    { id: 4, path: "/assests/images/brand (4).png" },
  ];

  return (
    <div className="py-5">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={4}
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
                width={200}
                height={200}
                className="img-fluid"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandSlider;
