import React from "react";

const SliderSec = () => {

  const data = [
    {
      id:1,
      path: "/assests/images/bg-img.png",
      details: [
        {
          title: "Domain Research & Ideate",
          desc: "Customer domain is  E commocers platform.  They hope to collect all  pets/pet servises sellers and buyers. We found large ammout of websites and community to designed for this. according to research. we identify best features / most impressive and usable functions/ faliers what they did and more. this is e com website we have to focus how it reach to more users."
        },
        {
          title: "Make User Persona",
          desc: " People who find pets and pet services /n People who provide Pets and Pet services"
        },
        {
          title: "Solution Design",
          desc: "Anlysing all the details which collected form research and personas next we designs fuctions. In this case we forcus customer requerments and business needs"
        }
      ]
    },
    {
      id:2,
      path: "/assests/images/bg-img.png",
      details: [
        {
          title: "Domain Research & Ideate",
          desc: "Customer domain is  E commocers platform.  They hope to collect all  pets/pet servises sellers and buyers. We found large ammout of websites and community to designed for this. according to research. we identify best features / most impressive and usable functions/ faliers what they did and more. this is e com website we have to focus how it reach to more users."
        },
        {
          title: "Make User Persona",
          desc: " People who find pets and pet services /n People who provide Pets and Pet services"
        },
        {
          title: "Solution Design",
          desc: "Anlysing all the details which collected form research and personas next we designs fuctions. In this case we forcus customer requerments and business needs"
        }
      ]
    }
  ]
  return (
    <div className="d-flex position-relative padding-top padding-x-100px">
      <h2 className="font-inter font-900 font-28px py-5">Ideate & Research</h2>
    </div>
  );
};

export default SliderSec;
