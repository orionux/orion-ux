import Image from 'next/image'
import React from 'react'

const GetInTouch = () => {
  return (
    <>
    <div className="d-flex flex-column text-center pt-5 pb-0 mb-0 justify-content-center align-items-center">
        <h2 className='col-12 col-lg-7 font-500 font-space-g font-32px mt-5'>Get Ready to Maximize Your Productivity With Our Design Solutions</h2>
        <div className="d-flex justify-content-center align-items-center position-relative pt-3">
            <button className='get-in-touch-btn font-700'>
            GET IN TOUCH
            </button>
            <Image src={'/assests/images/click-here.png'} alt='' width={200} height={200} className='img-fluid click-here-btn-img' />
        </div>
        <Image src={'/assests/images/get-in-touch-image.png'} alt='' width={900} height={700} className='img-fluid' />
    </div>
    </>
  )
}

export default GetInTouch