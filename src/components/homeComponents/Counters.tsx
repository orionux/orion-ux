import React from 'react'

const Counters = () => {
  return (
    <>
    <div className="d-flex bg-color-yellow padding-x-100px py-3">
        <div className="col-12 row row-cols-1 row-cols-sm-2 row-cols-lg-4">
            <div className="col txt-color-white text-center">
                <h1 className='font-72px font-700 mb-0'>50 +</h1>
                <p className='font-22 font-600 mb-0 font-inter'>Completed Projects </p>
            </div>
            <div className="col txt-color-white text-center">
                <h1 className='font-72px font-700 mb-0'>16+</h1>
                <p className='font-22 font-600 mb-0 font-inter'>Counties</p>
            </div>
            <div className="col txt-color-white text-center">
                <h1 className='font-72px font-700 mb-0'>10+</h1>
                <p className='font-22 font-600 mb-0 font-inter'>Services</p>
            </div>
            <div className="col txt-color-white text-center">
                <h1 className='font-72px font-700 mb-0'>15+</h1>
                <p className='font-22 font-600 mb-0 font-inter'>Tech Stack</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Counters