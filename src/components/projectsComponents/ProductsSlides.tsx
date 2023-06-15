/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ProductsSlides = () => {
  const [activeTab, setActiveTab] = useState("UIUX");
  const [activeSubTab, setActiveSubTab] = useState("subtab1");

  const tabs = [
    {
      id: "UIUX",
      title: "UI/UX",
      subtabs: [
        {
          id: "subtab1",
          title: "Bowwow.lk",
          content: "Subtab 1 Content",
          contentTitlePart1: "Designed marketplace ",
          contentTitlePart2: "to Buy & Sell All Pets and Pet services.",
          buttonLink: "#",
          role: "Digital Product Designer",
          service: " Research, UX & UI",
          duration: " 12 Weeks",
          website: " Own Product",
          imagePath: "/assests/images/case-studies/subtab-img-1.png",
        },
        {
          id: "subtab2",
          title: "Bowwow.lk",
          content: "Subtab 2 Content",
          contentTitlePart1: "Designed marketplace ",
          contentTitlePart2: " to Buy & Sell All Pets and Pet services.",
          buttonLink: "#",
          role: "Digital Product Designer",
          service: " Research, UX & UI",
          duration: " 12 Weeks",
          website: " Own Product",
          imagePath: "/assests/images/case-studies/subtab-img-1.png",
        },
        {
          id: "subtab3",
          title: "Bowwow.lk",
          content: "Subtab 3 Content",
          contentTitlePart1: "Designed marketplace ",
          contentTitlePart2: "to Buy & Sell All Pets and Pet services.",
          buttonLink: "#",
          role: "Digital Product Designer",
          service: " Research, UX & UI",
          duration: " 12 Weeks",
          website: " Own Product",
          imagePath: "/assests/images/case-studies/subtab-img-1.png",
        },
        {
          id: "subtab4",
          title: "Bowwow.lk",
          content: "Subtab 4 Content",
          contentTitlePart1: "Designed marketplace ",
          contentTitlePart2: "to Buy & Sell All Pets and Pet services.",
          buttonLink: "#",
          role: "Digital Product Designer",
          service: " Research, UX & UI",
          duration: " 12 Weeks",
          website: " Own Product",
          imagePath: "/assests/images/case-studies/subtab-img-1.png",
        },
        {
          id: "subtab5",
          title: "Bowwow.lk",
          content: "Subtab 5 Content",
          contentTitlePart1: "Designed marketplace ",
          contentTitlePart2: "to Buy & Sell All Pets and Pet services.",
          buttonLink: "#",
          role: "Digital Product Designer",
          service: " Research, UX & UI",
          duration: " 12 Weeks",
          website: " Own Product",
          imagePath: "/assests/images/case-studies/subtab-img-1.png",
        },
        {
          id: "subtab6",
          title: "Bowwow.lk",
          content: "Subtab 6 Content",
          contentTitlePart1: "Designed marketplace ",
          contentTitlePart2: "to Buy & Sell All Pets and Pet services.",
          buttonLink: "#",
          role: "Digital Product Designer",
          service: " Research, UX & UI",
          duration: " 12 Weeks",
          website: " Own Product",
          imagePath: "/assests/images/case-studies/subtab-img-1.png",
        },
        {
          id: "subtab7",
          title: "Bowwow.lk",
          content: "Subtab 7 Content",
          contentTitlePart1: "Designed marketplace ",
          contentTitlePart2: "to Buy & Sell All Pets and Pet services.",
          buttonLink: "#",
          role: "Digital Product Designer",
          service: " Research, UX & UI",
          duration: " 12 Weeks",
          website: " Own Product",
          imagePath: "/assests/images/case-studies/subtab-img-1.png",
        },
      ],
    },
    {
      id: "Art",
      title: "Digital Art",
      subtabs: [
        {
          id: "subtab1",
          title: "Bowwow.lk",
          content: "Subtab 1 Content",
          contentTitlePart1: "Designed marketplace ",
          contentTitlePart2: "to Buy & Sell All Pets and Pet services.",
          buttonLink: "#",
          role: "Digital Product Designer",
          service: " Research, UX & UI",
          duration: " 12 Weeks",
          website: " Own Product",
          imagePath: "/assests/images/case-studies/subtab-img-1.png",
        },
        {
          id: "subtab2",
          title: "Bowwow.lk",
          content: "Subtab 2 Content",
          contentTitlePart1: "Designed marketplace ",
          contentTitlePart2: "to Buy & Sell All Pets and Pet services.",
          buttonLink: "#",
          role: "Digital Product Designer",
          service: " Research, UX & UI",
          duration: " 12 Weeks",
          website: " Own Product",
          imagePath: "/assests/images/case-studies/subtab-img-1.png",
        },
        {
          id: "subtab3",
          title: "Bowwow.lk",
          content: "Subtab 3 Content",
          contentTitlePart1: "Designed marketplace ",
          contentTitlePart2: "to Buy & Sell All Pets and Pet services.",
          buttonLink: "#",
          role: "Digital Product Designer",
          service: " Research, UX & UI",
          duration: " 12 Weeks",
          website: " Own Product",
          imagePath: "/assests/images/case-studies/subtab-img-1.png",
        },
        {
          id: "subtab4",
          title: "Bowwow.lk",
          content: "Subtab 4 Content",
          contentTitlePart1: "Designed marketplace ",
          contentTitlePart2: "to Buy & Sell All Pets and Pet services.",
          buttonLink: "#",
          role: "Digital Product Designer",
          service: " Research, UX & UI",
          duration: " 12 Weeks",
          website: " Own Product",
          imagePath: "/assests/images/case-studies/subtab-img-1.png",
        },
        {
          id: "subtab5",
          title: "Bowwow.lk",
          content: "Subtab 5 Content",
          contentTitlePart1: "Designed marketplace ",
          contentTitlePart2: "to Buy & Sell All Pets and Pet services.",
          buttonLink: "#",
          role: "Digital Product Designer",
          service: " Research, UX & UI",
          duration: " 12 Weeks",
          website: " Own Product",
          imagePath: "/assests/images/case-studies/subtab-img-1.png",
        },
        {
          id: "subtab6",
          title: "Bowwow.lk",
          content: "Subtab 6 Content",
          contentTitlePart1: "Designed marketplace ",
          contentTitlePart2: "to Buy & Sell All Pets and Pet services.",
          buttonLink: "#",
          role: "Digital Product Designer",
          service: " Research, UX & UI",
          duration: " 12 Weeks",
          website: " Own Product",
          imagePath: "/assests/images/case-studies/subtab-img-1.png",
        },
        {
          id: "subtab7",
          title: "Bowwow.lk",
          content: "Subtab 7 Content",
          contentTitlePart1: "Designed marketplace ",
          contentTitlePart2: "to Buy & Sell All Pets and Pet services.",
          buttonLink: "#",
          role: "Digital Product Designer",
          service: " Research, UX & UI",
          duration: " 12 Weeks",
          website: " Own Product",
          imagePath: "/assests/images/case-studies/subtab-img-1.png",
        },
      ],
    },
    {
      id: "Branding",
      title: "Branding",
      subtabs: [
        {
          id: "subtab1",
          title: "Bowwow.lk",
          content: "Subtab 1 Content",
          contentTitlePart1: "Designed marketplace ",
          contentTitlePart2: "to Buy & Sell All Pets and Pet services.",
          buttonLink: "#",
          role: "Digital Product Designer",
          service: " Research, UX & UI",
          duration: " 12 Weeks",
          website: " Own Product",
          imagePath: "/assests/images/case-studies/subtab-img-1.png",
        },
        {
          id: "subtab2",
          title: "Bowwow.lk",
          content: "Subtab 2 Content",
          contentTitlePart1: "Designed marketplace ",
          contentTitlePart2: "to Buy & Sell All Pets and Pet services.",
          buttonLink: "#",
          role: "Digital Product Designer",
          service: " Research, UX & UI",
          duration: " 12 Weeks",
          website: " Own Product",
          imagePath: "/assests/images/case-studies/subtab-img-1.png",
        },
        {
          id: "subtab3",
          title: "Bowwow.lk",
          content: "Subtab 3 Content",
          contentTitlePart1: "Designed marketplace ",
          contentTitlePart2: "to Buy & Sell All Pets and Pet services.",
          buttonLink: "#",
          role: "Digital Product Designer",
          service: " Research, UX & UI",
          duration: " 12 Weeks",
          website: " Own Product",
          imagePath: "/assests/images/case-studies/subtab-img-1.png",
        },
        {
          id: "subtab4",
          title: "Bowwow.lk",
          content: "Subtab 4 Content",
          contentTitlePart1: "Designed marketplace ",
          contentTitlePart2: "to Buy & Sell All Pets and Pet services.",
          buttonLink: "#",
          role: "Digital Product Designer",
          service: " Research, UX & UI",
          duration: " 12 Weeks",
          website: " Own Product",
          imagePath: "/assests/images/case-studies/subtab-img-1.png",
        },
        {
          id: "subtab5",
          title: "Bowwow.lk",
          content: "Subtab 5 Content",
          contentTitlePart1: "Designed marketplace ",
          contentTitlePart2: "to Buy & Sell All Pets and Pet services.",
          buttonLink: "#",
          role: "Digital Product Designer",
          service: " Research, UX & UI",
          duration: " 12 Weeks",
          website: " Own Product",
          imagePath: "/assests/images/case-studies/subtab-img-1.png",
        },
        {
          id: "subtab6",
          title: "Bowwow.lk",
          content: "Subtab 6 Content",
          contentTitlePart1: "Designed marketplace ",
          contentTitlePart2: "to Buy & Sell All Pets and Pet services.",
          buttonLink: "#",
          role: "Digital Product Designer",
          service: " Research, UX & UI",
          duration: " 12 Weeks",
          website: " Own Product",
          imagePath: "/assests/images/case-studies/subtab-img-1.png",
        },
        {
          id: "subtab7",
          title: "Bowwow.lk",
          content: "Subtab 7 Content",
          contentTitlePart1: "Designed marketplace ",
          contentTitlePart2: "to Buy & Sell All Pets and Pet services.",
          buttonLink: "#",
          role: "Digital Product Designer",
          service: " Research, UX & UI",
          duration: " 12 Weeks",
          website: " Own Product",
          imagePath: "/assests/images/case-studies/subtab-img-1.png",
        },
      ],
    },
    {
      id: "marketing",
      title: "Digital marketing",
      subtabs: [
        {
          id: "subtab1",
          title: "Bowwow.lk",
          content: "Subtab 1 Content",
          contentTitlePart1: "Designed marketplace ",
          contentTitlePart2: "to Buy & Sell All Pets and Pet services.",
          buttonLink: "#",
          role: "Digital Product Designer",
          service: " Research, UX & UI",
          duration: " 12 Weeks",
          website: " Own Product",
          imagePath: "/assests/images/case-studies/subtab-img-1.png",
        },
        {
          id: "subtab2",
          title: "Bowwow.lk",
          content: "Subtab 2 Content",
          contentTitlePart1: "Designed marketplace ",
          contentTitlePart2: "to Buy & Sell All Pets and Pet services.",
          buttonLink: "#",
          role: "Digital Product Designer",
          service: " Research, UX & UI",
          duration: " 12 Weeks",
          website: " Own Product",
          imagePath: "/assests/images/case-studies/subtab-img-1.png",
        },
        {
          id: "subtab3",
          title: "Bowwow.lk",
          content: "Subtab 3 Content",
          contentTitlePart1: "Designed marketplace ",
          contentTitlePart2: "to Buy & Sell All Pets and Pet services.",
          buttonLink: "#",
          role: "Digital Product Designer",
          service: " Research, UX & UI",
          duration: " 12 Weeks",
          website: " Own Product",
          imagePath: "/assests/images/case-studies/subtab-img-1.png",
        },
        {
          id: "subtab4",
          title: "Bowwow.lk",
          content: "Subtab 4 Content",
          contentTitlePart1: "Designed marketplace ",
          contentTitlePart2: "to Buy & Sell All Pets and Pet services.",
          buttonLink: "#",
          role: "Digital Product Designer",
          service: " Research, UX & UI",
          duration: " 12 Weeks",
          website: " Own Product",
          imagePath: "/assests/images/case-studies/subtab-img-1.png",
        },
        {
          id: "subtab5",
          title: "Bowwow.lk",
          content: "Subtab 5 Content",
          contentTitlePart1: "Designed marketplace ",
          contentTitlePart2: "to Buy & Sell All Pets and Pet services.",
          buttonLink: "#",
          role: "Digital Product Designer",
          service: " Research, UX & UI",
          duration: " 12 Weeks",
          website: " Own Product",
          imagePath: "/assests/images/case-studies/subtab-img-1.png",
        },
        {
          id: "subtab6",
          title: "Bowwow.lk",
          content: "Subtab 6 Content",
          contentTitlePart1: "Designed marketplace ",
          contentTitlePart2: "to Buy & Sell All Pets and Pet services.",
          buttonLink: "#",
          role: "Digital Product Designer",
          service: " Research, UX & UI",
          duration: " 12 Weeks",
          website: " Own Product",
          imagePath: "/assests/images/case-studies/subtab-img-1.png",
        },
        {
          id: "subtab7",
          title: "Bowwow.lk",
          content: "Subtab 7 Content",
          contentTitlePart1: "Designed marketplace ",
          contentTitlePart2: " to Buy & Sell All Pets and Pet services.",
          buttonLink: "#",
          role: "Digital Product Designer",
          service: " Research, UX & UI",
          duration: " 12 Weeks",
          website: " Own Product",
          imagePath: "/assests/images/case-studies/subtab-img-1.png",
        },
      ],
    },
  ];

  return (
    <>
      <div className="py-5 mt-5 w-100 d-flex flex-column align-items-center justify-content-center">
        <div className="d-flex flex-column align-items-center ">
          <div className="d-flex flex-column align-items-center  w-100">
            <ul
              className="nav nav-tabs justify-content-center mb-5 px-5"
              id="myTab"
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
                    {tab.title}
                  </button>
                </li>
              ))}
            </ul>

            <h5 className="w-100 text-start">CASE STUDIES</h5>
            <div className="tab-content" id="myTabContent">
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
                  <ul
                    id="subTab"
                    className="nav nav-tabs justify-content-end mb-5 px-5"
                  >
                    {tab.subtabs.map((subtab) => (
                      <li
                        className="nav-item"
                        role="presentation"
                        key={subtab.id}
                      >
                        <button
                          className={`nav-link ${
                            activeSubTab === subtab.id ? "active" : ""
                          }`}
                          id={`${subtab.id}-tab`}
                          data-bs-toggle="tab"
                          data-bs-target={`#${subtab.id}`}
                          type="button"
                          role="tab"
                          aria-controls={subtab.id}
                          aria-selected={
                            activeSubTab === subtab.id ? "true" : "false"
                          }
                          onClick={() => setActiveSubTab(subtab.id)}
                        >
                          {subtab.title}
                        </button>
                      </li>
                    ))}
                  </ul>

                  <div className="tab-content">
                    {tab.subtabs.map((subtab) => (
                      <div
                        className={`tab-pane fade ${
                          activeSubTab === subtab.id ? "show active" : ""
                        }`}
                        id={subtab.id}
                        role="tabpanel"
                        aria-labelledby={`${subtab.id}-tab`}
                        key={subtab.id}
                      >
                        <div className="d-flex flex-column">
                          <div className="d-flex">
                            {subtab.contentTitlePart1 !== "" && (
                              <h1
                                className="font-inter font-400 font-48 me-2"
                                style={{ color: "#B3B3B3" }}
                              >
                                {subtab.contentTitlePart1}
                              </h1> 
                            )}
                            {subtab.contentTitlePart2 !== "" && (
                              <h1
                                className="font-inter font-600 font-48"
                                style={{ color: "#656565" }}
                              >
                                {subtab.contentTitlePart2}
                              </h1>
                            )}
                          </div>
                          <Link href={`${subtab.buttonLink}`} target="_blank">
                            See Prototype
                          </Link>
                          <div className="d-flex row row-cols-1 row-cols-sm-2 row-cols-lg-4">
                            <div className="col d-flex flex-column">
                              <p>Role</p>
                              <p>{subtab.role}</p>
                            </div>
                            <div className="col d-flex flex-column">
                              <p>Services</p>
                              <p>{subtab.service}</p>
                            </div>
                            <div className="col d-flex flex-column">
                              <p>Duration</p>
                              <p>{subtab.duration}</p>
                            </div>
                            <div className="col d-flex flex-column">
                              <p>Website</p>
                              <p>{subtab.website}</p>
                            </div>
                          </div>
                          <Image
                            src={`${subtab.imagePath}`}
                            alt=""
                            width={600}
                            height={600}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsSlides;
