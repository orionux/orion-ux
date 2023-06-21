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

const ProjectSlider = () => {
  const slideImages = [
    { id: 1, path: "/assests/images/bg-img.png" },
    { id: 2, path: "/assests/images/bg-project.png" },
    { id: 3, path: "/assests/images/bg-img.png "},
  ];

  return (
    <div className="w-100">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        speed={15000}
        loop={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {slideImages.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="d-flex justify-content-center align-items-center m-0 p-0 project-slider">
              <Image
                src={item.path}
                alt=""
                width={900}
                height={900}
                className="img-project"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectSlider;
