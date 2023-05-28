import React, { useState } from 'react'
import ActiveNav from './ActiveNav'
import Link from 'next/link';
import Image from 'next/image';



interface NavLayoutProps {
  children?: React.ReactNode;
}


const NavLayout: React.FC<NavLayoutProps> = ({ children }) => {

  const [showMoibleNav, setShowMobileNav] = useState(false);

  const mobileNavbarHandler = () => {
    setShowMobileNav(current => !current);
  }

  return (
    <>
      <nav className="navbar navbar-expand-xl main-padding padding-x-100px " style={{backgroundColor:"#fff !important"}}>
        <div className="container-fluid px-0">
          {/* side logo area */}
          <div className="d-flex flex-row justify-content-center align-items-center">
              <Link className="navbar-brand font-lg mb-0" href="#">
                <Image src={"/assests/images/logo-black.svg"} alt='' width={150} height={80} />
              </Link>
          </div>
          {/* mobile toggle button */}
          <button
            className="navbar-toggler" onClick={mobileNavbarHandler} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="bi bi-list toggle-icon-styles"></span>
          </button>
          {
            showMoibleNav ? (
              <>
                <div className="d-flex flex-column mobile-nav-container text-center justify-content-start">
                <div className="d-flex justify-content-end py-3 px-3">
                    <i className="bi bi-x-lg close-icon-mobile-nav" onClick={mobileNavbarHandler}></i>
                </div>
                <div className="d-flex flex-column text-center justify-content-center pt-5 mt-5">
                    <Link className="nav-link px-3 py-2" aria-current="page" onClick={mobileNavbarHandler} href="/">Home</Link>
                    <Link className="nav-link px-3 py-2" onClick={mobileNavbarHandler} href="/projects">Projects</Link>
                    <Link className="nav-link px-3 py-2" onClick={mobileNavbarHandler} href="/services">Services</Link>
                    <Link className="nav-link px-3 py-2" onClick={mobileNavbarHandler} href="/market">Market</Link>
                    <Link className="nav-link px-3 py-2" onClick={mobileNavbarHandler} href="/about-us">About Us</Link>
                </div>
            </div>
            <ActiveNav />
      {children}
                </>
            ) : null
          }

          {/* nav links area */}
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link px-3 py-0" aria-current="page" href="/">Home</Link>
              <Link className="nav-link px-3 py-0" href="/projects">Projects</Link>
              <Link className="nav-link px-3 py-0" href="/services">Services</Link>
              <Link className="nav-link px-3 py-0" href="/market">Market</Link>
              <Link className="nav-link px-3 py-0" href="/about-us">About Us</Link>
            </div>
          </div>
        </div>
      </nav>
      <ActiveNav />
      {children}
    </>
  )
}

export default NavLayout