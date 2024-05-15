import React, { useState } from 'react';
import Nav from "./Nav";
import { IoMenu } from "react-icons/io5";

function Header() {
  // State to manage the visibility of the Nav component
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to toggle the visibility of the Nav component
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    // Header container
    <div className='sm:fixed sm:bg-lime-400 w-full'>
      <div className='p-3 flex iflex-wrap justify-between sm:justify-around '>
        {/* Site title */}
        <h1 className='inline font-semibold text-3xl'>Yogesh's Portfolio</h1>

        {/* Mobile menu */}
        <span className='p-2 absolute right-2 sm:hidden'>
          <div className='flex items-center justify-center flex-col'>
            {/* Clickable menu icon */}
            <div onClick={toggleNav}>
              <IoMenu size={20} />
            </div>
            
            {/* Nav component */}
            <div onClick={toggleNav} className={`pt-4 ${isNavOpen ? '' : 'hidden'}`}>
              <Nav />
            </div>
          </div>
        </span>

        {/* Nav component */}
        <div className='sm:block hidden'><Nav /></div>
      </div>
    </div>
  );
}

export default Header;
