import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';

function Home() {
  return (
    // Home section container
    <div id='home' className='h-screen'>
      {/* Content */}
      <div className='flex flex-col sm:flex-row justify-center h-full items-center gap-8'>
        {/* Profile image */}
        <div className='rounded-full overflow-hidden'>
          <img
            src="./images/dporg.jpg" alt="" height="300" width="300" />
        </div>
        {/* Text content */}
        <div className='flex flex-col gap-6 items-center'>
          {/* Greeting */}
          <h4 className='text-gray-500 font-semibold'>Hello, I'm</h4>
          {/* Name */}
          <h2 className='text-black font-semibold text-3xl'>Yogesh Ginti</h2>
          {/* Role */}
          <h3 className='text-orange-600 font-semibold text-2xl'>
            A {''}
            {/* Typewriter effect */}
            <span >
              <Typewriter
                words={['Frontend Developer', 'Backend Developer', 'Full Stack Developer']}
                loop={2}
                cursor
                cursorStyle='>'
                typeSpeed={80}
                deleteSpeed={70}
                delaySpeed={2000}
              />
            </span>
          </h3>
          {/* Buttons */}
          <div className='flex gap-6'>
            <a target='blank' href='https://docs.google.com/document/d/1Ry5OwkOQz_pkv3wJl4Cuvx6ohCHuLtGf2BBqkuwyByM/edit?usp=sharing' className='text-gray-600 font-semibold bg-white border-2 px-3 py-2 border-black rounded-3xl'>Download CV</a>
            <a href='#contact' className='text-white bg-black border-2 px-3 py-2 border-black rounded-3xl'>Contact Info</a>
          </div>
          {/* Social media icons */}
          <div className='flex gap-4 justify-center'>
            <a target='blank' href="https://github.com/Yogesh-Ginti"><FaGithub size={30} /></a>
            <a target='blank' href="https://linkedin.com/in/yogesh-ginti-6a2983257"><FaLinkedin size={30} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
