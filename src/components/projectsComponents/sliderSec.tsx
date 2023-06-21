import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const SliderSec = () => {
  const data = [
    {
      id: 1,
      path: "/assests/images/bg-img.png",
      mainTitle: "Ideate & Research",
      details: [
        {
          id: "sub1",
          title: "Domain Research & Ideate",
          desc: "Customer domain is  E commocers platform.  They hope to collect all  pets/pet servises sellers and buyers. We found large ammout of websites and community to designed for this. according to research. we identify best features / most impressive and usable functions/ faliers what they did and more. this is e com website we have to focus how it reach to more users.",
        },
        {
          id: "sub2",
          title: "Make User Persona",
          desc: " People who find pets and pet services /n People who provide Pets and Pet services",
        },
        {
          id: "sub3",
          title: "Solution Design",
          desc: "Anlysing all the details which collected form research and personas next we designs fuctions. In this case we forcus customer requerments and business needs",
        },
      ],
    },
    {
      id: 2,
      path: "/assests/images/bg-img.png",
      mainTitle: "Ideate & Research 1",
      details: [
        {
          id: "sub1",
          title: "Domain Research & Ideate 2",
          desc: "Customer domain is  E commocers platform.  They hope to collect all  pets/pet servises sellers and buyers. We found large ammout of websites and community to designed for this. according to research. we identify best features / most impressive and usable functions/ faliers what they did and more. this is e com website we have to focus how it reach to more users.",
        },
        {
          id: "sub2",
          title: "Make User Persona 2",
          desc: " People who find pets and pet services /n People who provide Pets and Pet services",
        },
        {
          id: "sub3",
          title: "Solution Design 2",
          desc: "Anlysing all the details which collected form research and personas next we designs fuctions. In this case we forcus customer requerments and business needs",
        },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState("UIUX");
  const [activeSubTab, setActiveSubTab] = useState("subtab1");

  const tabs = [
    {
      id: "UIUX",
      path: "/assests/images/tabimg.png",
      icon: "/assests/images/stage (1).png",
      mainTitle: "Ideate & Research",
      details: [
        {
          id: "sub1",
          title: "Domain Research & Ideate",
          desc: "Customer domain is  E commocers platform.  They hope to collect all  pets/pet servises sellers and buyers. We found large ammout of websites and community to designed for this. according to research. we identify best features / most impressive and usable functions/ faliers what they did and more. this is e com website we have to focus how it reach to more users.",
        },
        {
          id: "sub2",
          title: "Make User Persona",
          desc: " People who find pets and pet services /n People who provide Pets and Pet services",
        },
        {
          id: "sub3",
          title: "Solution Design",
          desc: "Anlysing all the details which collected form research and personas next we designs fuctions. In this case we forcus customer requerments and business needs",
        },
      ],
    },
    {
      id: "Art",
      path: "/assests/images/tabimg.png",
      icon: "/assests/images/stage (2).png",
      mainTitle: "Ideate & Research 2",
      details: [
        {
          id: "sub1",
          title: "Domain Research & Ideate",
          desc: "Customer domain is  E commocers platform.  They hope to collect all  pets/pet servises sellers and buyers. We found large ammout of websites and community to designed for this. according to research. we identify best features / most impressive and usable functions/ faliers what they did and more. this is e com website we have to focus how it reach to more users.",
        },
        {
          id: "sub2",
          title: "Make User Persona",
          desc: " People who find pets and pet services /n People who provide Pets and Pet services",
        },
        {
          id: "sub3",
          title: "Solution Design",
          desc: "Anlysing all the details which collected form research and personas next we designs fuctions. In this case we forcus customer requerments and business needs",
        },
      ],
    },
    {
      id: "dev",
      path: "/assests/images/tabimg.png",
      icon: "/assests/images/stage (3).png",
      mainTitle: "Ideate & Research 4",
      details: [
        {
          id: "sub1",
          title: "Domain Research & Ideate",
          desc: "Customer domain is  E commocers platform.  They hope to collect all  pets/pet servises sellers and buyers. We found large ammout of websites and community to designed for this. according to research. we identify best features / most impressive and usable functions/ faliers what they did and more. this is e com website we have to focus how it reach to more users.",
        },
        {
          id: "sub2",
          title: "Make User Persona",
          desc: " People who find pets and pet services /n People who provide Pets and Pet services",
        },
        {
          id: "sub3",
          title: "Solution Design",
          desc: "Anlysing all the details which collected form research and personas next we designs fuctions. In this case we forcus customer requerments and business needs",
        },
      ],
    },
  ];
  return (
    <div className="d-flex flex-column position-relative padding-top padding-x-100px">
      <div className="d-flex flex-column align-items-center position-relative  w-100">
        <div className="d-flex flex-column flex-lg-row w-100">
          <div className="col-12 col-lg-7"></div>
          <div className="col-12 col-lg-5 position-relative d-flex flex-row justify-content-start align-items-start">
            <ul
              className="nav nav-tabs"
              id="myTabResearch"
              role="tablist"
            >
              {tabs.map((tab) => (
                <li className="nav-item" role="presentation" key={tab.id}>
                  <button
                    className={`nav-link ${
                      activeTab === tab.id ? "active" : ""
                    }`}
                    id={`${tab.id}-tab`}
                    data-bs-toggle="tab"
                    data-bs-target={`#${tab.id}`}
                    type="button"
                    role="tab"
                    aria-controls={tab.id}
                    aria-selected={activeTab === tab.id ? "true" : "false"}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setActiveSubTab("subtab1");
                    }}
                  >
                    <Image
                      src={`${tab.icon}`}
                      alt=""
                      width={100}
                      height={100}
                      className="img-fluid"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="tab-content" id="myTabContentResearch">
          {tabs.map((tab) => (
            <div
              className={`tab-pane fade ${
                activeTab === tab.id ? "show active" : ""
              }`}
              id={tab.id}
              role="tabpanel"
              aria-labelledby={`${tab.id}-tab`}
              key={tab.id}
            >
              <div className="d-flex flex-column-reverse flex-lg-row tab-text-research">
                <div className="col-12 col-lg-7 p-5">
                  <h2 className="mb-3">{tab.mainTitle}</h2>
                  {tab.details.map((subtab) => (
                    <div key={subtab.id}>
                      <div className="d-flex flex-column">
                        <div className="d-flex flex-column py-2 mb-2 ">
                          <h3>{subtab.title}</h3>
                          <p>{subtab.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="col-12 col-lg-5">
                  <Image
                    src={`${tab.path}`}
                    alt=""
                    width={600}
                    height={600}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderSec;
