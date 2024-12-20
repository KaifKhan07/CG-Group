import React, { useState } from 'react';
import companylogo from '../assets/images/png/asset 0.png';
import hamburger from '../assets/images/svg/asset 10.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);  // Corrected the state initialization

  const openSidebar = () => {
    setIsOpen(!isOpen);  // Toggle sidebar visibility
  };

  return (
    <div className='navbar fixed w-full z-30 bg-white'>
      <div className="first-nav flex justify-between px-6 sm:px-10 md:px-20 py-2">
        <div className='text-[rgb(139,151,167)] text-sm sm:text-xl'>
          World's Largest Medical Equipment Market Place
        </div>
        <ul className='flex list-none gap-2 cursor-pointer text-sm sm:text-xl'>
          <li>My account</li>
          <li>|</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div className='horizontal-line px-6 sm:px-10 md:px-20'>
        <hr />
      </div>

      <div className="main-nav flex items-center justify-between px-6 sm:px-10 md:px-20 py-2">
        <div className="company-img">
          <img src={companylogo} alt="Company Logo" className="h-12" />
        </div>
        <div className="company-links hidden md:flex">
          <ul className='flex gap-6 text-[rgb(115,115,138)]'>
            <li>About Us</li>
            <li>Our Story</li>
            <li>Sell on 1MDM</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div className='md:hidden'>
          <img
            src={hamburger}
            alt="Hamburger Icon"
            className='h-8 w-8 cursor-pointer'
            onClick={openSidebar}
          />
          {/* Sidebar for mobile view */}
          {isOpen && (
            <div className='bg-white absolute top-0 right-0 w-full h-screen md:hidden flex justify-end'>
              <div className='p-4 h-[100vh] w-[100vw] flex flex-col justify-center gap-4 items-center'>
                <ul className=' flex flex-col gap-5 justify-center items-center  text-[rgb(115,115,138)]'>
                  <li>About Us</li>
                  <li>Our Story</li>
                  <li>Sell on 1MDM</li>
                  <li>Pricing</li>
                </ul>
                <button
                  className='text-red-500 text-xl mt-4'
                  onClick={openSidebar} // Close sidebar
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
