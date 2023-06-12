import Image from "next/image";
import React from "react";

const Laptop = () => {
  return (
    <div className="d-flex justify-content-center align-items-center screen-fit-img bg-color-dark-gray">
      <Image
        src={"/assests/images/laptop-mobile.png"}
        alt=""
        width={900}
        height={900}
        className="laptop-image p-2 p-lg-5"
      />
    </div>
  );
};

export default Laptop;
