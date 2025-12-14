import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaGithubSquare } from "react-icons/fa";
import Nav from './Nav';

function Contact() {
  return (
    // Contact section container
    <>
      <div id='contact' className='mt-10 p-2 w-full'>
        {/* Title */}
        <p className='text-center text-gray-700'>Get in Reach</p>
        <h1 className='text-center text-4xl font-semibold'>Contact Me</h1>
        {/* Contact information */}
        <div className='flex flex-wrap justify-center items-center gap-8 p-4 mt-2'>
          {/* Email */}
          <div className='flex justify-center items-center gap-2 p-2'>
            <CgMail size={30} />
            <a href="mailto:yogeshginti@gmail.com">
              Send email
            </a>
          </div>
          {/* LinkedIn */}
          <div className='flex justify-center items-center gap-2 p-2'>
            <FaLinkedin size={30} />
            <a target='blank' href="https://linkedin.com/in/yogesh-ginti-6a2983257">LinkedIn</a>
          </div>
          {/* GitHub */}
          <div className='flex justify-center items-center gap-2 p-2'>
            <FaGithubSquare size={30} />
            <a target='blank' href="https://github.com/Yogesh-Ginti">GitHub</a>
          </div>
        </div>
        {/* Navigation */}
        <div className='hidden sm:block'><Nav/></div>
      </div>
    </>
  );
}

export default Contact;
