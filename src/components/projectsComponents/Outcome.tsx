import Image from "next/image";
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
        <h2 className="font-inter font-32 font-400 text-center">Do you need <b>custom app designs</b> <br />for your project?</h2>
        <Image
                src={"/assests/images/start-btn.png"}
                alt=""
                width={150}
                height={150}
                className="img-fluid"
              />
      </div>
    </>
  );
};

export default Outcome;
