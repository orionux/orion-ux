/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";

const LatestProjects = () => {
  return (
    <>
      <div className="d-flex bg-color-dark-gray py-5 padding-x-100px">
        <div className="d-flex flex-column flex-lg-row w-100">
          <div className="col-12 col-lg-4 mt-5">
            <div className="d-flex flex-column flex-lg-row pt-5">
              <div className="col-12 col-lg-10">
                <h2 className="text-white font-48px font-space-g font-600 space-2">UI/UX Design</h2>
                <div className="hr-decor"></div>
              </div>
              <div className="col-12 col-lg-2"></div>
            </div>

            <div className="d-flex flex-column flex-lg-row">
              {/* <div className="col-12 col-lg-3"></div> */}
              <div className=".col-12 col-lg-10 d-flex flex-column align-items-center align-items-lg-end">
                <button className="btn-link-latest mb-3 mt-5 space-1 font-inter font-20px ">
                  Digital Art Works
                </button>
                <button className="btn-link-latest mb-3 mt-3 space-2 font-inter font-20px">
                  Digital Marketing
                </button>
                <button className="btn-link-latest mb-3 mt-3 space-3 font-inter font-20px">
                  Branding
                </button>
                <button className="btn-link-latest mb-3 mt-3 space-4 font-inter font-20px">
                  3D Designs
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8 p-5 position-relative rectangle-bg">
          <h2 className="font-inter font-700 font-42px" style={{color:"#4D4D4D"}}>Latest Projects</h2>
            <div className="d-flex flex-column flex-lg-row">
            <div className="col-12 col-lg-3">
            
            </div>
            <div className="col-12 col-lg-9 text-center d-flex flex-column align-items-center ">
              <h3 className="font-inter font-700 font-32px pt-5" style={{color:'#EDB507'}}>Bowwow.lk</h3>
              <Image src={'/assests/images/laptop-yellow.png'} alt='' width={400} height={225} />
              <div className="d-flex flex-column justify-content-start align-items-start">
              <p className="font-inter font-400 font-14px text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet lacus, vitae amet, elit. Elit, elit, tortor ipsum quis pellentesque nisl.</p>
              <div className="hr-gray mt-3 mb-4"></div>
              <a href="" className="font-18px font-500 font-inter text-start text-dark" style={{textDecoration: 'none'}}>
              Watch full Project
              </a>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestProjects;
