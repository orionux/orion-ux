import Image from "next/image";
import React from "react";

const VisitMarket = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <Image src={'/assests/images/visit-market.png'} alt='' width={1360} height={300} className="img-fluid" />
      </div>
    </>
  );
};

export default VisitMarket;
