import Image from "next/image";
import React, { useState } from "react";

const Feelings = () => {
  const [selectedItem, setSelectedItem] = useState("Our Products");
  type CategoryItem = {
    id: number;
    title: string;
  };
  
  type Categories = {
    [key: string]: CategoryItem[];
  };
  const categories: Categories = {
    "Our Products": [
      { id: 1, title: "ERP System" },
      { id: 2, title: "Hotel Management System" },
    ],
    "Digital Marketing": [
      { id: 1, title: "Social Media Marketing" },
      { id: 2, title: "Search Engine Optimization (SEO)" },
      { id: 3, title: "Pay-Per-Click Advertising (PPC)" },
      { id: 4, title: "Online Reputation Management" },
      { id: 5, title: "Digital Strategy and Consultation" },
    ],
    "Brandings": [
      { id: 1, title: "Brand Strategy" },
      { id: 2, title: "Brand Identity Design" },
      { id: 3, title: "Brand Guidelines" },
      { id: 4, title: "Brand Research and Analysis" },
      { id: 5, title: "Brand Monitoring and Management:" },
    ],
    "Software Development": [
      { id: 1, title: "Web Development" },
      { id: 2, title: "Mobile App Development" },
      { id: 3, title: "Quality Assurance and Testing" },
      { id: 4, title: "Enterprise Software Solutions" },
      { id: 5, title: "Maintenance and Support" },
    ],
  };

  const handleItemClick = (item: React.SetStateAction<string>) => {
    setSelectedItem(item);
  };

  return (
    <div className="d-none d-lg-flex bg-color-white padding-x-100px feelings-sec padding-y">
      <div className="col-12 col-lg-8 d-flex flex-column flex-lg-row">
        <div className="col-12 col-lg-6 pe-5 d-flex justify-content-center flex-column text-start vr-line-feelings">
          <h2 className="font-inter font-600 font-32px">WE DESIGN</h2>
          <h2 className="font-inter font-600 font-48px">FEELINGS</h2>
          <ul className="ps-0 font-inter font-400 font-18px" style={{ listStyle: "none" }}>
            {Object.keys(categories).map((category) => (
              <li
                key={category}
                className={`d-flex flex-row align-items-center mb-4 ${selectedItem === category ? "selected" : ""
                  }`}
                onClick={() => handleItemClick(category)}
              >
                <div className="linebullet me-3"></div>
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-12 col-lg-6 ps-5 d-flex justify-content-center flex-column text-start">
          <div className="d-none d-lg-block" style={{ height: "90px" }}></div>
          <ul className="ps-0 font-inter font-300 font-16px" style={{ listStyle: "none" }}>
            {categories[selectedItem] && (
              <>
                {categories[selectedItem].map((item: { id: React.Key | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) => (
                  <div key={item.id} className="d-flex flex-row align-items-center mb-4">
                    <Image src={"/assests/images/arrowBullet.png"} alt="" width={30} height={30} className="me-2 bulletVisible" />
                    <li className="second_list_item">{item.title}</li>
                  </div>
                ))}
              </>
            )}
          </ul>
        </div>
      </div>
      <div className="col-12 col-lg-4 img-height">
        {selectedItem === "Our Products" && (
          <Image
            src={"/assests/images/feelings-image.png"}
            alt=""
            width={400}
            height={600}
            className="img-fluid"
          />
        )}
        {selectedItem === "Digital Marketing" && (
          <Image
            src={"/assests/images/laptop-yellow.png"}
            alt=""
            width={400}
            height={600}
            className="img-fluid"
          />
        )}
        {selectedItem === "Brandings" && (
          <Image
            src={"/assests/images/laptop-pink.png"}
            alt=""
            width={400}
            height={600}
            className="img-fluid"
          />
        )}
        {selectedItem === "Software Development" && (
          <Image
            src={"/assests/images/laptop-yellow.png"}
            alt=""
            width={400}
            height={600}
            className="img-fluid"
          />
        )}
      </div>
    </div>
  );
};

export default Feelings;
