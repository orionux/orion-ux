import Image from "next/image";
import React from "react";

const VisitSection = () => {
  return (
    <>
      <div className="d-flex flex-column flex-lg-row">
        <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center bg-color-yellow position-relative">
          <Image
            src={"/assests/images/visit.png"}
            alt=""
            width={400}
            height={400}
            className="margin-minus img-fluid"
          />
          <p className="font-space-g font-500 txt-color-dark-gray font-32px mb-2 mb-lg-5">
            Visit Market Place
          </p>
          <Image
            src={"/assests/images/visitbtn.png"}
            alt=""
            width={150}
            height={150}
            className="position-style img-fluid"
          />
        </div>
        <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center bg-color-dark-gray position-relative">
          <Image
            src={"/assests/images/learnimg.png"}
            alt=""
            width={400}
            height={400}
            className="margin-minus img-fluid"
          />
          <p className="font-space-g font-500 txt-color-yellow font-32px mb-2 mb-lg-5">
            Learn About UI/UX
          </p>
          <Image
            src={"/assests/images/learnbtn.png"}
            alt=""
            width={150}
            height={150}
            className="position-style img-fluid"
          />
        </div>
      </div>
    </>
  );
};

export default VisitSection;
