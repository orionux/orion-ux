/* eslint-disable react/jsx-key */
import Image from "next/image";
import React from "react";

const Target = () => {
  const data = [
    {
      id: 1,
      path: "/assests/images/img-1.png",
      title: "Ideate & Research",
      animationDuration: "1000",
      desc: "Through observation techniques, task analysis, and other feedback methodologies, user research focuses on understanding user behaviors, needs, and motivations.",
    },
    {
      id: 2,
      path: "/assests/images/img-2.png",
      title: "Data analysis",
      animationDuration: "1500",
      desc: "Understanding aspects of competitors' products allows you to strategically design your solution with the goal of creating a superior product and/or experience.",
    },
    {
      id: 3,
      path: "/assests/images/img-3.png",
      title: "wireframe & Testing",
      animationDuration: "2000",
      desc: "A wireframe is commonly used to layout content and functionality on a page which takes into account user needs and user journeys.",
    },
    {
      id: 4,
      path: "/assests/images/img-4.png",
      title: "Design UI & Implement",
      animationDuration: "2500",
      desc: "Software implementation refers to the process of adopting and integrating a software application into a business workflow",
    },
  ];

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-item-center pb-5 padding-top padding-x-100px">
        <div data-aos="fade-up" data-aos-duration="1000">
        <h2 className="font-space-g font-500 font-48px">What We going to do</h2>
        <p className="font-raleway font-300 font-28px">
          How UI/UX design is to an Investment?
        </p>
        </div>
        <div className="d-flex justify-content-center align-items-start row row-cols-1 row-cols-md-2 row-cols-lg-4">
          {data.map((item) => (
            <div key={item.id} className="col d-flex flex-column text-center justify-content-center align-item-center px-2 px-lg-4 pt-5 pb-3 " data-aos="zoom-out-up" data-aos-duration={item.animationDuration}>
              <Image
                src={item.path}
                alt=""
                width={300}
                height={300}
                className="img-fluid"
              />
              <h3 className="font-inter font-400 font-22px mt-2">
                {item.title}
              </h3>
              <p className="font-space-g  font-400 font-14px">
                {
                  item.desc
                }
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Target;
