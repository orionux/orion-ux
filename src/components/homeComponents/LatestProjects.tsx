import React from "react";

const LatestProjects = () => {
  return (
    <>
      <div className="d-flex bg-color-dark-gray py-5 padding-x-100px">
        <div className="d-flex flex-column flex-lg-row w-100">
          <div className="col-12 col-lg-4">
            <div className="d-flex flex-column flex-lg-row">
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
            <h2 className="font-inter font-700 font-48px">Latest Projects</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestProjects;
