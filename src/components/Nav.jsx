import React from 'react';

function Nav() {
  return (
    // Navigation links container
    <div className='flex flex-col sm:flex-row sm:flex justify-center gap-8 text-2xl'>
      {/* Navigation links */}
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#project">Project</a>
      <a href="#contact">Contact</a>     
    </div>
  );
}

export default Nav;
