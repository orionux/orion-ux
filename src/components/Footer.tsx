import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="d-flex flex-column  justify-content-center align-items-center flex-lg-row footer-top-border py-4 main-padding padding-x-100px ">
      <div className="col-12 col-lg-8 d-flex flex-column footer-cols mb-3">
        <div className="d-flex flex-row d-flex flex-row justify-content-center align-items-center">
          <div className="col-12 col-lg-6">
            <h2 className="footer-title font-900">Let&apos;s Talk</h2>
          </div>
          <div className="col-12 col-lg-6">
            <Image
              src={"/assests/images/click-large.png"}
              alt=""
              width={150}
              height={150}
              className="img-fluid"
            />
          </div>
        </div>
        <div className="d-flex flex-row d-flex flex-row justify-content-center align-items-center">
        <div className="col-12 col-lg-4">
            <Image
              src={"/assests/images/logo-footer.svg"}
              alt=""
              width={150}
              height={150}
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-lg-8">
            <p className="link-footer font-500 mb-0">dil.athuko@gmail.com</p>
            <p className="link-footer font-500">(+94)717697736</p>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-4 d-flex flex-column footer-cols mb-3 verticle-line">
        <div className="d-flex">
          <h3>Company</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
