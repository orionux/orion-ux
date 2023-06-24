/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React, { useEffect, useState } from "react";

const LatestProjects = () => {
  const [image, setImage] = useState("/assests/images/laptop-yellow.png");
  const [selectedButton, setSelectedButton] = useState(1);
  const [selectedItem, setSelectedItem] = useState(1);



  useEffect(() => {
    const handleButtonOnclick = ()=>{
      console.log("selected item handle: ",selectedButton)
    }
    handleButtonOnclick()
  }, [selectedButton])
  


  const handleClickPink = () => {
    setImage("/assests/images/laptop-pink.png");
  };
  const handleClickBlue = () => {
    setImage("/assests/images/laptop-pink.png");
  };
  const handleClickOrange = () => {
    setImage("/assests/images/laptop-pink.png");
  };
  const handleClickPurple = () => {
    setImage("/assests/images/laptop-pink.png");
  };
  const handleClickGreen = () => {
    setImage("/assests/images/laptop-pink.png");
  };

  const data = [
    {
      id: 1,
      buttonTitle: "UI/UX Design",
      alignment: "space-1",
      dataItems: [
        {
          id: 1,
          title: "Bowwow.lk",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet lacus, vitae amet, elit. Elit, elit, tortor ipsumquis pellentesque nisl.",
          image: "/assests/images/laptop-pink.png",
        },
        {
          id: 2,
          title: "Bowwow.lk",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet lacus, vitae amet, elit. Elit, elit, tortor ipsumquis pellentesque nisl.",
          image: "/assests/images/laptop-pink.png",
        },
        {
          id: 3,
          title: "Bowwow.lk",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet lacus, vitae amet, elit. Elit, elit, tortor ipsumquis pellentesque nisl.",
          image: "/assests/images/laptop-pink.png",
        },
        {
          id: 4,
          title: "Bowwow.lk",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet lacus, vitae amet, elit. Elit, elit, tortor ipsumquis pellentesque nisl.",
          image: "/assests/images/laptop-pink.png",
        },
        {
          id: 5,
          title: "Bowwow.lk",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet lacus, vitae amet, elit. Elit, elit, tortor ipsumquis pellentesque nisl.",
          image: "/assests/images/laptop-pink.png",
        },
      ],
    },
    {
      id: 2,
      buttonTitle: "Digital Art Works",
      alignment: "space-2",
      dataItems: [
        {
          id: 1,
          title: "Bowwow.lk",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet lacus, vitae amet, elit. Elit, elit, tortor ipsumquis pellentesque nisl.",
          image: "/assests/images/laptop-pink.png",
        },
        {
          id: 2,
          title: "Bowwow.lk",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet lacus, vitae amet, elit. Elit, elit, tortor ipsumquis pellentesque nisl.",
          image: "/assests/images/laptop-pink.png",
        },
        {
          id: 3,
          title: "Bowwow.lk",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet lacus, vitae amet, elit. Elit, elit, tortor ipsumquis pellentesque nisl.",
          image: "/assests/images/laptop-pink.png",
        },
        {
          id: 4,
          title: "Bowwow.lk",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet lacus, vitae amet, elit. Elit, elit, tortor ipsumquis pellentesque nisl.",
          image: "/assests/images/laptop-pink.png",
        },
        {
          id: 5,
          title: "Bowwow.lk",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet lacus, vitae amet, elit. Elit, elit, tortor ipsumquis pellentesque nisl.",
          image: "/assests/images/laptop-pink.png",
        },
      ],
    },
    {
      id: 3,
      buttonTitle: "Digital Marketing",
      alignment: "space-3",
      dataItems: [
        {
          id: 1,
          title: "Bowwow.lk",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet lacus, vitae amet, elit. Elit, elit, tortor ipsumquis pellentesque nisl.",
          image: "/assests/images/laptop-pink.png",
        },
        {
          id: 2,
          title: "Bowwow.lk",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet lacus, vitae amet, elit. Elit, elit, tortor ipsumquis pellentesque nisl.",
          image: "/assests/images/laptop-pink.png",
        },
        {
          id: 3,
          title: "Bowwow.lk",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet lacus, vitae amet, elit. Elit, elit, tortor ipsumquis pellentesque nisl.",
          image: "/assests/images/laptop-pink.png",
        },
        {
          id: 4,
          title: "Bowwow.lk",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet lacus, vitae amet, elit. Elit, elit, tortor ipsumquis pellentesque nisl.",
          image: "/assests/images/laptop-pink.png",
        },
        {
          id: 5,
          title: "Bowwow.lk",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet lacus, vitae amet, elit. Elit, elit, tortor ipsumquis pellentesque nisl.",
          image: "/assests/images/laptop-pink.png",
        },
      ],
    },
    {
      id: 4,
      buttonTitle: "Branding",
      alignment: "space-4",
      dataItems: [
        {
          id: 1,
          title: "Bowwow.lk",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet lacus, vitae amet, elit. Elit, elit, tortor ipsumquis pellentesque nisl.",
          image: "/assests/images/laptop-pink.png",
        },
        {
          id: 2,
          title: "Bowwow.lk",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet lacus, vitae amet, elit. Elit, elit, tortor ipsumquis pellentesque nisl.",
          image: "/assests/images/laptop-pink.png",
        },
        {
          id: 3,
          title: "Bowwow.lk",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet lacus, vitae amet, elit. Elit, elit, tortor ipsumquis pellentesque nisl.",
          image: "/assests/images/laptop-pink.png",
        },
        {
          id: 4,
          title: "Bowwow.lk",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet lacus, vitae amet, elit. Elit, elit, tortor ipsumquis pellentesque nisl.",
          image: "/assests/images/laptop-pink.png",
        },
        {
          id: 5,
          title: "Bowwow.lk",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet lacus, vitae amet, elit. Elit, elit, tortor ipsumquis pellentesque nisl.",
          image: "/assests/images/laptop-pink.png",
        },
      ],
    },
    {
      id: 5,
      buttonTitle: "3D Designs",
      alignment: "space-5",
      dataItems: [
        {
          id: 1,
          title: "Bowwow.lk",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet lacus, vitae amet, elit. Elit, elit, tortor ipsumquis pellentesque nisl.",
          image: "/assests/images/laptop-pink.png",
        },
        {
          id: 2,
          title: "Bowwow.lk",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet lacus, vitae amet, elit. Elit, elit, tortor ipsumquis pellentesque nisl.",
          image: "/assests/images/laptop-pink.png",
        },
        {
          id: 3,
          title: "Bowwow.lk",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet lacus, vitae amet, elit. Elit, elit, tortor ipsumquis pellentesque nisl.",
          image: "/assests/images/laptop-pink.png",
        },
        {
          id: 4,
          title: "Bowwow.lk",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet lacus, vitae amet, elit. Elit, elit, tortor ipsumquis pellentesque nisl.",
          image: "/assests/images/laptop-pink.png",
        },
        {
          id: 5,
          title: "Bowwow.lk",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet lacus, vitae amet, elit. Elit, elit, tortor ipsumquis pellentesque nisl.",
          image: "/assests/images/laptop-pink.png",
        },
      ],
    },
  ];

  

  return (
    <>
      <div className="d-none d-lg-flex bg-color-dark-gray py-5 padding-x-100px">
        <div className="d-flex flex-column w-100 position-relative">
          <div className="d-flex flex-column flex-lg-row">
            <div className="col-12 col-lg-4 mt-5">
              <div className="d-flex flex-column flex-lg-row">
                <div className=".col-12 col-lg-10 d-flex flex-column align-items-center align-items-lg-end">
                  {data.map((item) => (
                    <button
                      key={item.id}
                      onClick={()=> {
                        setSelectedButton(item.id)
                      }}
                      className={`btn-link-latest mb-3 mt-4 ${item.alignment} font-inter font-20px `}
                    >
                      {item.buttonTitle}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-8 p-5 position-relative rectangle-bg">
              <h2
                className="font-inter font-700 font-42px"
                style={{ color: "#4D4D4D" }}
              >
                Latest Projects
              </h2>
              <div className="d-flex flex-column flex-lg-row">
                <div className="col-12 col-lg-3 empty-column"></div>
                <div
                  className="col-12 col-lg-9 text-center d-flex flex-column align-items-center "
                  data-aos="zoom-out-up"
                  data-aos-duration="2000"
                >
                  <h3
                    className="font-inter font-700 font-32px pt-5"
                    style={{ color: "#EDB507" }}
                  >
                    Bowwow.lk
                  </h3>
                  <Image src={image} alt="" width={400} height={225} />
                  <div className="d-flex flex-column justify-content-start align-items-start">
                    <p className="font-inter font-400 font-14px text-start">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Amet lacus, vitae amet, elit. Elit, elit, tortor ipsum
                      quis pellentesque nisl.
                    </p>
                    <div className="hr-gray mt-2"></div>
                    <a
                      href=""
                      className="font-18px font-500 font-inter text-start text-dark watch-link mt-2 mb-3"
                      style={{ textDecoration: "none" }}
                    >
                      Watch full Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column justify-content-end flex-lg-row row row-cols-1 row-cols-md-2 row-cols-lg-5 col-position">
            {/* col 1 */}
            <div
              onClick={handleClickPink}
              className="col col-pink col-laptop d-flex flex-column justify-content-center align-items-center"
              data-aos="zoom-out-up"
              data-aos-duration="1000"
            >
              <h3 className="text-white font-700 font-16px">Bowwow.lk</h3>
              <Image
                src={"/assests/images/laptop-no-inner.png"}
                alt=""
                width={180}
                height={80}
                className="img-fluid "
              />
              <div className="d-flex flex-row">
                <div className="col-4"></div>
                <div className="col-8">
                  <p
                    className="text-start font-400 font-inter font-5px mb-1"
                    style={{ color: "##4A4A4A" }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Amet lacus, vitae amet, elit. Elit, elit, tortor ipsum quis
                    pellentesque nisl. Lobortis nulla elementum pellentesque
                    risus, laoreet sit. Praesent sit et, risus,
                  </p>
                  <div className="hr-small"></div>
                </div>
              </div>
            </div>
            {/* col 2 */}
            <div
              onClick={handleClickBlue}
              className="col col-blue col-laptop d-flex flex-column justify-content-center align-items-center"
              data-aos="zoom-out-up"
              data-aos-duration="1500"
            >
              <h3 className="text-white font-700 font-16px">Bowwow.lk</h3>
              <Image
                src={"/assests/images/laptop-no-inner.png"}
                alt=""
                width={180}
                height={80}
                className="img-fluid "
              />
              <div className="d-flex flex-row">
                <div className="col-4"></div>
                <div className="col-8">
                  <p
                    className="text-start font-400 font-inter font-5px mb-1"
                    style={{ color: "##4A4A4A" }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Amet lacus, vitae amet, elit. Elit, elit, tortor ipsum quis
                    pellentesque nisl. Lobortis nulla elementum pellentesque
                    risus, laoreet sit. Praesent sit et, risus,
                  </p>
                  <div className="hr-small"></div>
                </div>
              </div>
            </div>
            {/* col 3 */}
            <div
              onClick={handleClickOrange}
              className="col col-orange col-laptop d-flex flex-column justify-content-center align-items-center"
              data-aos="zoom-out-up"
              data-aos-duration="2000"
            >
              <h3 className="text-white font-700 font-16px">Bowwow.lk</h3>
              <Image
                src={"/assests/images/laptop-no-inner.png"}
                alt=""
                width={180}
                height={80}
                className="img-fluid "
              />
              <div className="d-flex flex-row">
                <div className="col-4"></div>
                <div className="col-8">
                  <p
                    className="text-start font-400 font-inter font-5px mb-1"
                    style={{ color: "##4A4A4A" }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Amet lacus, vitae amet, elit. Elit, elit, tortor ipsum quis
                    pellentesque nisl. Lobortis nulla elementum pellentesque
                    risus, laoreet sit. Praesent sit et, risus,
                  </p>
                  <div className="hr-small"></div>
                </div>
              </div>
            </div>
            {/* col 4 */}
            <div
              onClick={handleClickPurple}
              className="col col-purple col-laptop d-flex flex-column justify-content-center align-items-center"
              data-aos="zoom-out-up"
              data-aos-duration="2500"
            >
              <h3 className="text-white font-700 font-16px">Bowwow.lk</h3>
              <Image
                src={"/assests/images/laptop-no-inner.png"}
                alt=""
                width={180}
                height={80}
                className="img-fluid "
              />
              <div className="d-flex flex-row">
                <div className="col-4"></div>
                <div className="col-8">
                  <p
                    className="text-start font-400 font-inter font-5px mb-1"
                    style={{ color: "##4A4A4A" }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Amet lacus, vitae amet, elit. Elit, elit, tortor ipsum quis
                    pellentesque nisl. Lobortis nulla elementum pellentesque
                    risus, laoreet sit. Praesent sit et, risus,
                  </p>
                  <div className="hr-small"></div>
                </div>
              </div>
            </div>
            {/* col 5 */}
            <div
              onClick={handleClickGreen}
              className="col col-green col-laptop d-flex flex-column justify-content-center align-items-center"
              data-aos="zoom-out-up"
              data-aos-duration="3000"
            >
              <h3 className="text-white font-700 font-16px">Bowwow.lk</h3>
              <Image
                src={"/assests/images/laptop-no-inner.png"}
                alt=""
                width={180}
                height={80}
                className="img-fluid "
              />
              <div className="d-flex flex-row">
                <div className="col-4"></div>
                <div className="col-8">
                  <p
                    className="text-start font-400 font-inter font-5px mb-1"
                    style={{ color: "##4A4A4A" }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Amet lacus, vitae amet, elit. Elit, elit, tortor ipsum quis
                    pellentesque nisl. Lobortis nulla elementum pellentesque
                    risus, laoreet sit. Praesent sit et, risus,
                  </p>
                  <div className="hr-small"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="spacer">
            <Image
              src={"/assests/images/visit-marketplace.png"}
              alt=""
              width={150}
              height={150}
              className="img-fluid "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestProjects;
