import Image from "next/image";
import Link from "next/link";
import React from "react";

const Reason = () => {
  return (
    <>
      <div className="d-flex flex-column-reverse flex-lg-row padding-y padding-x-100px" style={{backgroundColor:"#EFEFEF !important"}}>
        <div className="col-12 col-lg-6 px-3"
        data-aos="fade-right"
        data-aos-duration="3000">
          <h2 className="font-space-g font-500 font-48px mb-4">
            Why should you choose the US?
          </h2>
          <ul className="list-styles">
            <li className="mb-3">
              we have highly skilled UI/UX engineers with excellent technical
              knowledge and experience.
            </li>
            <li className="mb-3">We open to partnership</li>
            <li className="mb-3">young company energy</li>
            <li className="mb-3">quick and on-time delivery</li>
          </ul>
          <div className="d-flex flex-column flex-lg-row mb-5">
            <div className="col-12 col-lg-4 d-flex flex-row">
              <div className="col-4 me-2">
                <Image
                  src={"/assests/images/icon-1.png"}
                  alt=""
                  width={80}
                  height={60}
                  className="img-fluid reason-icon"
                />
              </div>
              <div className="col-8">
                <p>new design trends</p>
              </div>
            </div>
            <div className="col-12 col-lg-4 d-flex flex-row">
              <div className="col-4 me-2">
                <Image
                  src={"/assests/images/icon-2.png"}
                  alt=""
                  width={80}
                  height={60}
                  className="img-fluid reason-icon"
                />
              </div>
              <div className="col-8">
                <p>Line up with requirements</p>
              </div>
            </div>
            <div className="col-12 col-lg-4 d-flex flex-row">
              <div className="col-4 me-2">
                <Image
                  src={"/assests/images/icon-3.png"}
                  alt=""
                  width={80}
                  height={60}
                  className="img-fluid reason-icon"
                />
              </div>
              <div className="col-8">
                <p>use latest technology </p>
              </div>
            </div>
          </div>
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
        <div className="col-12 col-lg-6 px-3 d-flex justify-content-center align-item-center"
        data-aos="fade-left"
        data-aos-duration="3000">
          <Image
            src={"/assests/images/why-side-img.png"}
            alt=""
            width={500}
            height={400}
            className="img-fluid"
          />
        </div>
      </div>
    </>
  );
};

export default Reason;
