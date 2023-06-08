import Image from "next/image";
import React from "react";

const Target = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-item-center pb-5 padding-top padding-x-100px">
        <h2 className="font-space-g font-500 font-48px">What We going to do</h2>
        <p className="font-raleway font-300 font-28px">
          How UI/UX design is to an Investment?
        </p>
        <div className="d-flex justify-content-center align-items-center row row-cols-1 row-cols-md-2 row-cols-lg-4">
          <div className="col d-flex flex-column text-center justify-content-center align-item-center px-2 px-lg-4 pt-5 pb-3 ">
            <Image
              src={"/assests/images/col1.png"}
              alt=""
              width={300}
              height={300}
              className="img-fluid"
            />
            <h3 className="font-inter font-400 font-28px">Ideate & Research</h3>
            <p className="font-inter font-400 font-16px">
              Through observation techniques, task analysis, and other feedback
              methodologies, user research focuses on understanding user
              behaviors, needs, and motivations.
            </p>
          </div>
          <div className="col d-flex flex-column text-center justify-content-center align-item-center px-2 px-lg-4 pt-5 pb-3 ">
            <Image
              src={"/assests/images/col1.png"}
              alt=""
              width={300}
              height={300}
              className="img-fluid"
            />
            <h3 className="font-inter font-400 font-28px">Ideate & Research</h3>
            <p className="font-inter font-400 font-16px">
              Through observation techniques, task analysis, and other feedback
              methodologies, user research focuses on understanding user
              behaviors, needs, and motivations.
            </p>
          </div>
          <div className="col d-flex flex-column text-center justify-content-center align-item-center px-2 px-lg-4 pt-5 pb-3 ">
            <Image
              src={"/assests/images/col1.png"}
              alt=""
              width={300}
              height={300}
              className="img-fluid"
            />
            <h3 className="font-inter font-400 font-28px">Ideate & Research</h3>
            <p className="font-inter font-400 font-16px">
              Through observation techniques, task analysis, and other feedback
              methodologies, user research focuses on understanding user
              behaviors, needs, and motivations.
            </p>
          </div>
          <div className="col d-flex flex-column text-center justify-content-center align-item-center px-2 px-lg-4 pt-5 pb-3 ">
            <Image
              src={"/assests/images/col1.png"}
              alt=""
              width={300}
              height={300}
              className="img-fluid"
            />
            <h3 className="font-inter font-400 font-28px">Ideate & Research</h3>
            <p className="font-inter font-400 font-16px">
              Through observation techniques, task analysis, and other feedback
              methodologies, user research focuses on understanding user
              behaviors, needs, and motivations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Target;
