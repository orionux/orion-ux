import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { Button } from 'reactstrap'

const HeroSection = () => {
  return (
    <>
      <div className="d-flex flex-column-reverse flex-lg-row bg-color-white height-80vh position-relative">
        <div className="col-12 col-lg-6 d-flex flex-column justify-content-center padding-left-100px" 
        data-aos="fade-right"
     data-aos-duration="3000">
          <h2 className="txt-color-gray font-600 font-64px font-inter">
            We design Feeling
          </h2>
          <p className="font-raleway font-400 font-24px">
            We Maily Design a user interface that aligns well with your business
            goals and creates excellent conversion rates.
          </p>
          {/* <Button className='font-raleway btn-hero-sec'>Get Start</Button> */}
          <Link href={"#"} className="">
            <Image
              src={"/assests/images/get-start-button.png"}
              alt=""
              width={200}
              height={50}
              className="img-fluid"
            />
          </Link>
        </div>
        <div className="col-12 px-lg-0 d-flex justify-content-end align-items-end hero-img-size">
          <div className="col-12 col-lg-4"></div>
          <div className="col-12 col-lg-8 d-flex justify-content-lg-end">
            <Image
              src={"/assests/images/hero-sec-image.png"}
              alt=""
              width={800}
              height={500}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
