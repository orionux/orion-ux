import React from 'react'

const LatestProjects = () => {
    return (
        <>
            <div className="d-flex bg-color-dark-gray py-5 padding-x-100px">
                <div className="d-flex flex-column flex-lg-row">
                    <div className="col-12 col-lg-6">
                        <h2>UI/UX Design</h2>
                        <div className="hr-decor"></div>
                        <div className="d-flex flex-column">
                            <button className='btn-link-latest mb-3'>Digital Art Works</button>
                            <div className="d-flex flex-col flex-lg-row">
                                <div className="col-3"></div>
                                <div className="col-9">
                                    <button className='btn-link-latest mb-3'>Digital Art Works</button>
                                </div>
                            </div>
                            <div className="d-flex flex-col flex-lg-row">
                                <div className="col-6"></div>
                                <div className="col-6">
                                    <button className='btn-link-latest mb-3'>Digital Art Works</button>
                                </div>
                            </div>
                            <div className="d-flex flex-col flex-lg-row">
                                <div className="col-9"></div>
                                <div className="col-3">
                                    <button className='btn-link-latest mb-3'>Digital Art Works</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6"></div>
                </div>
            </div>
        </>
    )
}

export default LatestProjects