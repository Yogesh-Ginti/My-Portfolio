import React from 'react';
import cryptoImg from "../assets/projects/crypto.png";
import apiImg from "../assets/projects/api.png";
import portfolioImg from "../assets/projects/portfolio.png";
import yostreamImg from "../assets/projects/portfolio.png";
import { MdVisibility } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

function Project() {
  return (
    // Project section container
    <>
      <div id='project' className='p-2 w-full'>
        {/* Title */}
        <p className='text-center text-gray-700'>Have a Look</p>
        <h1 className='text-center text-4xl font-semibold mb-4'>My Project</h1>
        {/* Project cards */}
        <div className='flex flex-wrap justify-center items-center gap-10'>
          {/* First project */}
          <div className='flex flex-col items-center justify-center gap-2'>
            <div className='peer rounded-lg overflow-hidden bg-slate-400 border-2 border-amber-500'>
              <img src={cryptoImg} alt="crypto app" height="350" width="350" />
            </div>
            <div className='hidden hover:flex peer-hover:flex gap-4 p-2 rounded-xl absolute'>
              {/* Demo link */}
              <a className='bg-amber-400 py-1 px-5 rounded-lg border-2' href="https://own-cryptoverse.netlify.app/" target='blank'><MdVisibility size={20} /></a>
              {/* GitHub link */}
              <a className='bg-amber-400 py-1 px-5 rounded-lg border-2' href="https://github.com/Yogesh-Ginti/CryptoProject.git" target='blank'><FaGithub size={20} /></a>
            </div>
            {/* Project name */}
            <h4 className='font-semibold'>CryptoVerse React App</h4>
          </div>
          {/* Second project */}
          <div className='flex flex-col items-center justify-center gap-2'>
            <div className='peer rounded-lg overflow-hidden border-2 border-amber-500'>
              <img src={apiImg} alt="crypto app" height="350" width="350" />
            </div>
            <div className='hidden hover:flex peer-hover:flex gap-4 p-2 rounded-xl absolute'>
              {/* Demo link */}
              <a className='bg-amber-400 py-1 px-5 rounded-lg border-2' href="https://get-youtube-subscriber-3k8h.onrender.com"><MdVisibility size={20} /></a>
              {/* GitHub link */}
              <a className='bg-amber-400 py-1 px-5 rounded-lg border-2' href="https://github.com/Yogesh-Ginti/Get_YOUTUBE_SUBSCRIBER.git"><FaGithub size={20} /></a>
            </div>
            {/* Project name */}
            <h4 className='font-semibold'>Youtube Subscriber Api</h4>
          </div>
          {/* third project */}
          <div className='flex flex-col items-center justify-center gap-2'>
            <div className='peer rounded-lg overflow-hidden border-2 border-amber-500'>
              <img src={yostreamImg} alt="yostream" height="350" width="350" />
            </div>
            <div className='hidden hover:flex peer-hover:flex gap-4 p-2 rounded-xl absolute'>
              {/* Demo link */}
              <a className='bg-amber-400 py-1 px-5 rounded-lg border-2' href="https://yo-stream-entertainment-webapp.vercel.app"><MdVisibility size={20} /></a>
              {/* GitHub link */}
              <a className='bg-amber-400 py-1 px-5 rounded-lg border-2' href="https://github.com/Yogesh-Ginti/YoStream_entertainment_app.git"><FaGithub size={20} /></a>
            </div>
            {/* Project name */}
            <h4 className='font-semibold'>Yostream Entertainment App</h4>
          </div>
          {/* Fourth project */}
          <div className='flex flex-col items-center justify-center gap-2'>
            <div className='peer rounded-lg overflow-hidden bg-slate-400 border-2 border-amber-500'>
              <img src={portfolioImg} alt="crypto app" height="350" width="350" />
            </div>
            <div className='hidden hover:flex peer-hover:flex gap-4 p-2 rounded-xl absolute'>
              {/* Demo link */}
              <a className='bg-amber-400 py-1 px-5 rounded-lg border-2' href="https://yogesh-portfolio-git-main-yogesh-gintis-projects.vercel.app" target='blank'><MdVisibility size={20} /></a>
              {/* GitHub link */}
              <a className='bg-amber-400 py-1 px-5 rounded-lg border-2' href="https://github.com/Yogesh-Ginti/My-Portfolio.git" target='blank'><FaGithub size={20} /></a>
            </div>
            {/* Project name */}
            <h4 className='font-semibold'>MY Portfolio</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
