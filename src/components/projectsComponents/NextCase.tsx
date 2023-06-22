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

const NextCase = () => {
  const slideImages = [
    { id: 1, path: "/assests/images/next-img.png", title:"Blue Prints 1" },
    { id: 2, path: "/assests/images/next-img.png", title:"Blue Prints 2" },
    { id: 3, path: "/assests/images/next-img.png", title:"Blue Prints 3" },
  ];
  return (
    <div className="d-flex flex-column bg-color-yellow py-5 padding-x-100px w-100">
      <h2 className="font-inter font-48px text-white">
        Next <b>Case Study</b>
      </h2>
      <div className="d-flex justify-content-center align-items-center py-5 w-100">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={10}
          slidesPerView={3}
          //   navigation
          // autoplay={{
          //   delay: 1,
          //   disableOnInteraction: false,
          // }}
          speed={5000}
          loop={true}
          breakpoints={{
            0: {
              width: 0,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
            1024: {
              width: 1024,
              slidesPerView: 3,
            },
          }}
            pagination={{ clickable: true }}
          //   scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {slideImages.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="d-flex  flex-column justify-content-center align-items-center">
                <Image
                  src={item.path}
                  alt=""
                  width={300}
                  height={250}
                  className="img-fluid"
                />
                <p className="font-inter font-22px text-center">{item.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NextCase;
