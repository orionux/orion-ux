import Image from "next/image";
import React, { useState } from "react";

const Feelings = () => {
  const [selectedItem, setSelectedItem] = useState("UI/UX Design");

  const handleItemClick = (item: React.SetStateAction<string>) => {
    setSelectedItem(item);
  };

  const uiUxDesign = [
    { id: 1, title: "Mobile App Design" },
    { id: 2, title: "Web Site Design" },
    { id: 3, title: "Desktop App Design" },
    { id: 4, title: "Desktop App Design" },
    { id: 5, title: "Rewamp(RE - design)" },
  ]
  const softwareDevelopment = [
    { id: 1, title: "softwareDevelopment 1" },
    { id: 2, title: "softwareDevelopment 2" },
    { id: 3, title: "softwareDevelopment 3" },
    { id: 4, title: "softwareDevelopment 4" },
    { id: 5, title: "softwareDevelopment 5" },
  ]
  const Branding = [
    { id: 1, title: "Branding 1" },
    { id: 2, title: "Branding 2" },
    { id: 3, title: "Branding 3" },
    { id: 4, title: "Branding 4" },
    { id: 5, title: "Branding 5" },
  ]
  const digitalMarketing = [
    { id: 1, title: "digitalMarketing 1" },
    { id: 2, title: "digitalMarketing 2" },
    { id: 3, title: "digitalMarketing 3" },
    { id: 4, title: "digitalMarketing 4" },
    { id: 5, title: "digitalMarketing 5" },
  ]
  const ourProducts = [
    { id: 1, title: "ourProducts 1" },
    { id: 2, title: "ourProducts 2" },
    { id: 3, title: "ourProducts 3" },
    { id: 4, title: "ourProducts 4" },
    { id: 5, title: "ourProducts 5" },
  ]

  return (
    <div className="d-none d-lg-flex bg-color-white py-5 padding-x-100px feelings-sec">
      <div className="col-12 col-lg-8 d-flex flex-column flex-lg-row">
        <div className="col-12 col-lg-6 pe-5 d-flex justify-content-center flex-column text-start vr-line-feelings">
          <h2 className="font-inter font-600 font-32px">WE DESIGN</h2>
          <h2 className="font-inter font-600 font-48px">FEELINGS</h2>
          <ul
            className="ps-0 font-inter font-400 font-18px"
            style={{ listStyle: "none" }}
          >
            <li
              className={`d-flex flex-row align-items-center ${selectedItem === "UI/UX Design" ? "selected" : ""}`}
              style={{}}
              onClick={() => handleItemClick("UI/UX Design")}
            >
              <div className="linebullet me-3"></div> UI/UX Design
            </li>
            <li
              className={`d-flex flex-row align-items-center ${selectedItem === "Software Development" ? "selected" : ""}`}
              style={{}}
              onClick={() => handleItemClick("Software Development")}
            >
              <div className="linebullet me-3"></div> Software Development
            </li>
            <li
              className={`d-flex flex-row align-items-center ${selectedItem === "Branding" ? "selected" : ""}`}
              style={{}}
              onClick={() => handleItemClick("Branding")}
            >
              <div className="linebullet me-3"></div> Branding
            </li>
            <li
              className={`d-flex flex-row align-items-center ${selectedItem === "Digital marketing" ? "selected" : ""}`}
              style={{}}
              onClick={() => handleItemClick("Digital marketing")}
            >
              <div className="linebullet me-3"></div> Digital marketing
            </li>
            <li
              className={`d-flex flex-row align-items-center ${selectedItem === "Our Products" ? "selected" : ""}`}
              style={{}}
              onClick={() => handleItemClick("Our Products")}
            >
              <div className="linebullet me-3"></div> Our Products
            </li>
          </ul>
        </div>

        <div className="col-12 col-lg-6 ps-5 d-flex justify-content-center flex-column text-start">
          <div className="d-none d-lg-block" style={{ height: "90px" }}></div>
          <ul
            className="ps-0 font-inter font-300 font-16px "
            style={{ listStyle: "none" }}
          >
            {selectedItem === "UI/UX Design" && (
              <>
                {uiUxDesign.map((item) => (
                  <li key={item.id}>{item.title}</li>
                ))}
              </>
            )}
            {selectedItem === "Software Development" && (
              <>
                {softwareDevelopment.map((item) => (
                  <li key={item.id}>{item.title}</li>
                ))}
              </>
            )}
            {selectedItem === "Branding" && (
              <>
                {Branding.map((item) => (
                  <li key={item.id}>{item.title}</li>
                ))}
              </>
            )}
            {selectedItem === "Digital marketing" && (
              <>
                {digitalMarketing.map((item) => (
                  <li key={item.id}>{item.title}</li>
                ))}
              </>
            )}
            {selectedItem === "Our Products" && (
              <>
                {ourProducts.map((item) => (
                  <li key={item.id}>{item.title}</li>
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
