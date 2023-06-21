/* eslint-disable react/jsx-key */
import Image from "next/image";
import React, { useState } from "react";

const ImageGride = () => {
  const [activeImg, setActiveImage] = useState('/assests/images/large-2.png');

  const colImages = [
    { id: 1, path: "/assests/images/large-2.png", title: "Blue Prints" },
    { id: 2, path: "/assests/images/large-3.png", title: "Design System" },
    { id: 3, path: "/assests/images/large-4.png", title: "Desktop app" },
    { id: 4, path: "/assests/images/large-5.png", title: "Mobile App" },
  ];
  return (
    <div className="d-flex flex-column padding-x-100px bg-color-white py-5">
      <div className="d-flex w-100">
        <Image
          src={activeImg}
          alt=""
          width={1024}
          height={1024}
          className="img-large"
        />
      </div>
      <div className="d-flex row row-cols-2 row-cols-lg-4">
        {colImages.map((item) => (
          <div className="col p-3" key={item.id}>
            <div className="d-flex flex-column">
              <Image
                src={item.path}
                alt=""
                width={300}
                height={250}
                className="img-fluid"
                onClick={()=>setActiveImage(item.path)}
                style={{cursor:'pointer'}}
              />
              <p className="font-inter font-22px font-400 text-center mt-2">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGride;
