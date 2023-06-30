import Image from "next/image";
import Link from "next/link";
import React from "react";

const Outcome = () => {

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center bg-color-dark-gray py-5 px-5">
        <div className="d-flex flex-column py-5">
          <h2 className="font-inter font-28px text-white text-center">OUTCOME</h2>
          <p className="font-inter font-18px text-white text-center txt-width">
            We successfully completed design phase and created a gem for our
            portfolio to showcase our capabilities for initial clients.
          </p>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center bg-color-white py-5 px-5">
        <h2 className="font-inter font-32 font-500 text-center">Do you need <b>custom app designs</b> <br />for your project?</h2>
        <div className="d-flex w-100 justify-content-center py-3">
        <div className="round-button-container"></div>
        <div className="round-button-container-text d-flex justify-content-center align-items-center">
          <Link href={'#'} className="round-btn-fixed-text">START</Link>
        </div>
      </div>
      </div>

      

    </>
  );
};

export default Outcome;
