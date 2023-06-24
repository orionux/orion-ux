/* eslint-disable react/jsx-no-undef */
import React from "react";
import BrandSlider from "../sliders/BrandSlider";
import LogoSlider from "../sliders/LogoSlider";
import Link from "next/link";
import Image from "next/image";

const IndustryLeaders = () => {
  return (
    <>
      <div className="d-flex flex-column text-start bg-color-white padding-bottom pt-5 padding-x-100px"  data-aos="zoom-out"
          data-aos-duration="3000">
        <h2 className="font-space-g font-500 font-48px">
          Trusted Among Industry Leaders{" "}
        </h2>
        <BrandSlider />
        <LogoSlider />
        <div className="d-flex justify-content-center align-items-center">
        <Link href={"#"} className="">
            <Image
              src={"/assests/images/contact-us-btn.png"}
              alt=""
              width={200}
              height={50}
              className="img-fluid"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default IndustryLeaders;
