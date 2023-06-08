import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaSkype, FaTwitter, FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

type Props = {};

const Footer = (props: Props) => {
  const companyLinks = [
    {
      id: 1,
      title: "About us",
      link: "/about",
    },
    {
      id: 2,
      title: "Our work",
      link: "/our_work",
    },
    {
      id: 3,
      title: "Client",
      link: "/client",
    },
    {
      id: 4,
      title: "Our Blog",
      link: "/blog",
    },
    {
      id: 5,
      title: "Contact Us",
      link: "/contact",
    },
  ];

  const productsLinks = [
    {
      id: 1,
      title: "Graphic Design",
      link: "#",
    },
    {
      id: 2,
      title: "UI/UX Design",
      link: "#",
    },
    {
      id: 3,
      title: "Web Development",
      link: "#",
    },
    {
      id: 4,
      title: "App Development",
      link: "#",
    },
    {
      id: 5,
      title: "Web Hosting",
      link: "#",
    },
  ];

  return (
    <div className="d-flex flex-column p-0 m-0">
      <div className="vr-line"></div>
      <div className="d-flex flex-column  justify-content-center align-items-center flex-lg-row footer-top-border py-4 main-padding padding-x-100px ">
        <div className="col-12 col-lg-7 d-flex flex-column footer-cols mb-3">
          <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
            <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-start align-items-center mb-3 mb-lg-2">
              <h2 className="footer-title font-900">Let&apos;s Talk</h2>
            </div>
            <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-start align-items-center mb-3 mb-lg-2">
              <Image
                src={"/assests/images/click-large.png"}
                alt=""
                width={150}
                height={150}
                className="img-fluid"
              />
            </div>
          </div>
          <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
            <div className="col-12 col-lg-4 d-flex justify-content-center justify-content-lg-start align-items-center mb-3 mb-lg-2">
              <Image
                src={"/assests/images/logo-footer.svg"}
                alt=""
                width={150}
                height={150}
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-lg-8 d-flex flex-column text-center text-lg-start mb-3 mb-lg-2">
              <p className="link-footer font-500 mb-0">dil.athuko@gmail.com</p>
              <p className="link-footer font-500 mb-0">(+94)717697736</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-5 padding-left-100px d-flex flex-column footer-cols mb-3 verticle-line">
          <div className="col-12 d-flex flex-column flex-lg-row">
            <div className="d-flex flex-column col-12 col-lg-6 px-2 text-center text-lg-start mb-3 mb-lg-2">
              <h3 className="font-500 links-title-footer ">Company</h3>
              {companyLinks.map((item) => (
                <Link key={item.id} href={item.link} className="footer-links">
                  <p>{item.title}</p>
                </Link>
              ))}
            </div>
            <div className="d-flex flex-column col-12 col-lg-6 px-2  text-center text-lg-start">
              <h3 className="font-500 links-title-footer ">Products</h3>
              {productsLinks.map((item) => (
                <div key={item.id} className="footer-links">
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 d-flex flex-row justify-content-center justify-content-lg-end">
            <Link href={'#'} className="social-icon-container me-2"><FaFacebookF /></Link>
            <Link href={'#'} className="social-icon-container me-2"><AiFillInstagram /></Link>
            <Link href={'#'} className="social-icon-container me-2"><FaTwitter /></Link>
            <Link href={'#'} className="social-icon-container "><FaSkype /></Link>
          </div>
        </div>
      </div>
      <div className="vr-line-dark"></div>
    </div>
  );
};

export default Footer;
