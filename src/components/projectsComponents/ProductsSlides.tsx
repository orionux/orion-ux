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
          contentTitlePart1: "Designed marketplace 1",
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
          contentTitlePart1: "Designed marketplace 2",
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
          contentTitlePart1: "Designed marketplace 3",
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
          contentTitlePart1: "Designed marketplace 4",
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
          contentTitlePart1: "Designed marketplace 5",
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
          contentTitlePart1: "Designed marketplace 6",
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
          contentTitlePart1: "Designed marketplace 7",
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
          contentTitlePart1: "Designed marketplace 8",
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
          contentTitlePart1: "Designed marketplace 9",
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
          contentTitlePart1: "Designed marketplace 10",
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
          contentTitlePart1: "Designed marketplace 11",
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
          contentTitlePart1: "Designed marketplace 12",
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
          contentTitlePart1: "Designed marketplace 13",
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
          contentTitlePart1: "Designed marketplace 14",
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
          contentTitlePart1: "Designed marketplace 15",
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
          contentTitlePart1: "Designed marketplace 16",
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
          contentTitlePart1: "Designed marketplace 17",
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
          contentTitlePart1: "Designed marketplace 18",
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
          contentTitlePart1: "Designed marketplace 19",
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
          contentTitlePart1: "Designed marketplace 20",
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
          contentTitlePart1: "Designed marketplace 21",
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
          contentTitlePart1: "Designed marketplace 22",
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
          contentTitlePart1: "Designed marketplace 23",
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
          contentTitlePart1: "Designed marketplace 24",
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
          contentTitlePart1: "Designed marketplace 25",
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
          contentTitlePart1: "Designed marketplace 26",
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
          contentTitlePart1: "Designed marketplace 27",
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
          contentTitlePart1: "Designed marketplace 28",
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
                        className={`tab-pane fade shadow p-5 ${
                          activeSubTab === subtab.id ? "show active" : ""
                        }`}
                        id={subtab.id}
                        role="tabpanel"
                        aria-labelledby={`${subtab.id}-tab`}
                        key={subtab.id}
                      >
                        <div className="d-flex flex-column">
                          <div className="d-flex">
                            <p className="title-large mb-5">
                            {subtab.contentTitlePart1 !== "" && (
                              <span
                                className="font-inter font-400 font-48 me-2"
                                style={{ color: "#B3B3B3" }}
                              >
                                {subtab.contentTitlePart1}
                              </span> 
                            )}
                            {subtab.contentTitlePart2 !== "" && (
                              <span
                                className="font-inter font-600 font-48"
                                style={{ color: "#656565" }}
                              >
                                {subtab.contentTitlePart2}
                              </span>
                            )}
                            </p>
                          </div>
                          <Link href={`${subtab.buttonLink}`} className="mb-5" target="_blank">
                            <Image src={'/assests/images/see-prototype-btn.png'} alt="" width={200} height={50} />
                          </Link>
                          <div className="d-flex row row-cols-1 row-cols-sm-2 row-cols-lg-4">
                            <div className="col d-flex flex-column">
                              <p className="title-1 mb-0">Role</p>
                              <p className="title-2">{subtab.role}</p>
                            </div>
                            <div className="col d-flex flex-column">
                              <p className="title-1 mb-0">Services</p>
                              <p className="title-2">{subtab.service}</p>
                            </div>
                            <div className="col d-flex flex-column">
                              <p className="title-1 mb-0">Duration</p>
                              <p className="title-2">{subtab.duration}</p>
                            </div>
                            <div className="col d-flex flex-column">
                              <p className="title-1 mb-0">Website</p>
                              <p className="title-2">{subtab.website}</p>
                            </div>
                          </div>
                          <Image
                            src={`${subtab.imagePath}`}
                            alt=""
                            width={600}
                            height={600}
                            className="img-case"
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
