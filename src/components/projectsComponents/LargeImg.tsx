// import Image from 'next/image'
import Image from 'next/image'
import React from 'react'
import ProjectSlider from '../sliders/ProjectSlider'

const LargeImg = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      {/* <Image
        src={"/assests/images/bg-img.png"}
        alt=""
        width={900}
        height={900}
        className="laptop-image"
      /> */}
      <ProjectSlider />
    </div>
  )
}

export default LargeImg