import Image from "next/image";
import React, { useState } from "react";

const Feelings = () => {
  const [selectedItem, setSelectedItem] = useState("UI/UX Design");

  const categories = {
    "UI/UX Design": [
      { id: 1, title: "Mobile App Design" },
      { id: 2, title: "Web Site Design" },
      { id: 3, title: "Desktop App Design" },
      { id: 4, title: "Desktop App Design" },
      { id: 5, title: "Rewamp(RE - design)" },
    ],
    "Software Development": [
      { id: 1, title: "Software Development 1" },
      { id: 2, title: "Software Development 2" },
      { id: 3, title: "Software Development 3" },
      { id: 4, title: "Software Development 4" },
      { id: 5, title: "Software Development 5" },
    ],
    Branding: [
      { id: 1, title: "Branding 1" },
      { id: 2, title: "Branding 2" },
      { id: 3, title: "Branding 3" },
      { id: 4, title: "Branding 4" },
      { id: 5, title: "Branding 5" },
    ],
    "Digital Marketing": [
      { id: 1, title: "Digital Marketing 1" },
      { id: 2, title: "Digital Marketing 2" },
      { id: 3, title: "Digital Marketing 3" },
      { id: 4, title: "Digital Marketing 4" },
      { id: 5, title: "Digital Marketing 5" },
    ],
    "Our Products": [
      { id: 1, title: "Our Products 1" },
      { id: 2, title: "Our Products 2" },
      { id: 3, title: "Our Products 3" },
      { id: 4, title: "Our Products 4" },
      { id: 5, title: "Our Products 5" },
    ],
  };

  const handleItemClick = (item: React.SetStateAction<string>) => {
    setSelectedItem(item);
  };

  return (
    <div className="d-none d-lg-flex bg-color-white py-5 padding-x-100px feelings-sec">
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
        {selectedItem === "UI/UX Design" && (
          <Image
            src={"/assests/images/feelings-image.png"}
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
        {selectedItem === "Branding" && (
          <Image
            src={"/assests/images/laptop-pink.png"}
            alt=""
            width={400}
            height={600}
            className="img-fluid"
          />
        )}
        {selectedItem === "Digital marketing" && (
          <Image
            src={"/assests/images/visit.png"}
            alt=""
            width={400}
            height={600}
            className="img-fluid"
          />
        )}
        {selectedItem === "Our Products" && (
          <Image
            src={"/assests/images/learnimg.png"}
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
