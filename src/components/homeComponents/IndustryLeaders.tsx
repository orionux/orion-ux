import React from "react";
import BrandSlider from "../sliders/BrandSlider";
import LogoSlider from "../sliders/LogoSlider";

const IndustryLeaders = () => {
  return (
    <>
      <div className="d-flex flex-column text-start bg-color-white padding-bottom pt-5 padding-x-100px">
        <h2 className="font-space-g font-500 font-48px">
          Trusted Among Industry Leaders{" "}
        </h2>
        <BrandSlider />
        <LogoSlider />
      </div>
    </>
  );
};

export default IndustryLeaders;
