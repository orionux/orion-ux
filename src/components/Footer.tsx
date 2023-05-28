import Link from 'next/link';
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="d-flex flex-column flex-lg-row footer-top-border py-4 main-padding">
      <div className="col-12 col-sm-6 col-lg-3 d-flex flex-column footer-cols mb-3">
        <h3 style={{visibility: 'hidden'}} className='mb-0 d-none d-lg-block'>@ 2022 By Dilshan_UX</h3>
        <p className='mb-0'>© 2023 by Orion UX Labs</p>
      </div>
    </div>
  )
}

export default Footer