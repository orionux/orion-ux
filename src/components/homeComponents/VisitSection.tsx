import Image from 'next/image'
import React from 'react'

const VisitSection = () => {
  return (
    <>
    <div className="d-flex flex-column flex-lg-row">
        <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center bg-color-yellow">
            <Image src={'/assests/images/visit.png'} alt='' width={300} height={300}/>
            <p className='font-space-g font-500 txt-color-dark-gray font-32px mb-2 mb-lg-5'>Visit Market Place</p>
        </div>
        <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center bg-color-dark-gray">
            <Image src={'/assests/images/visit.png'} alt='' width={300} height={300}/>
            <p className='font-space-g font-500 txt-color-yellow font-32px mb-2 mb-lg-5'>Learn About UI/UX</p>
        </div>
    </div>
    </>
  )
}

export default VisitSection