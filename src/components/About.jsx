import React from 'react';
import { PiStudentFill } from "react-icons/pi";
import { MdWorkHistory } from "react-icons/md";
import ScrIcon from './ScrIcon';

function About() {
  return (
    // About section container
    <div id='about' className='p-4'>
      {/* Title */}
      <p className='text-center text-gray-700'>Know more</p>
      <h1 className=' text-center text-5xl font-semibold '>About Me</h1>
      {/* Main content container */}
      <div className='sm:h-[90vh] flex flex-col justify-center items-center mt-2'>
        {/* Two-column layout */}
        <div className='flex flex-col sm:flex-row  gap-6 items-center sm:justify-between'>
          {/* Profile image */}
          <div className='rounded-2xl overflow-hidden'>
            <img src="./images/maindp.jpg" alt="pic" height="300" width="300" />
          </div>
          {/* Information section */}
          <div className='sm:w-[50vw] w-full'>
            {/* Experience and Education sections */}
            <div className='flex gap-4 justify-center'>
              {/* Experience section */}
              <div className='flex flex-col justify-center items-center p-4 border-2 rounded-2xl border-black '>
                <MdWorkHistory size={30} />
                <h3 className='text-2xl font-semibold'>Experience</h3>
                <p>1+ year</p>
                <p>Training Program</p>
                <p>Full Stack Development</p>
              </div>
              {/* Education section */}
              <div className='flex flex-col justify-center items-center p-4 border-2 rounded-2xl border-black '>
                <PiStudentFill size={30} />
                <h3 className='text-2xl font-semibold'>Education</h3>
                <p>B.Sc Bachelor Degree</p>
                <p>MCA Master Degree</p>
              </div>
            </div>
            {/* Introduction */}
            <div className=' flex flex-col  gap-2 p-2 text-gray-700'>
              {/* Bullet points */}
              <li>
                Hi there! I'm Yogesh Ginti, an India-based full-stack web developer driven by a passion for creating captivating digital experiences. Over the past year, I've immersed myself in web development, mastering both front-end aesthetics and back-end functionalities.
              </li>
              <li>
                My passion for web development led me to pursue a comprehensive full-stack web development course, where I immersed myself in the intricacies of modern web technologies under the guide of Experts Armed with this knowledge and hands-on experience
              </li>
              <li>
                I'm ready to tackle new challenges and push the boundaries of what's possible in the digital landscape.
              </li>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll to top icon */}
      <ScrIcon />
    </div>
  );
}

export default About;
