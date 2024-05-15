import React from 'react';
import ScrIcon from './ScrIcon';

function Skills() {
  return (
    // Skills section container
    <>
        <div id='skills' className='p-2 h-screen w-full'>
          {/* Title */}
          <p className='text-center text-gray-700'>Discover MY</p>
          <h1 className='text-center text-4xl font-semibold'>Skills</h1>
          {/* Content */}
          <div className='mt-4 p-4 h-5/6 flex flex-col items-center justify-between'>
            {/* Frontend Development */}
            <div className='flex flex-col items-center gap-4'>
              <h3 className='text-3xl font-semibold'>FrontEnd Development</h3>
              <div className='flex flex-wrap items-center justify-center gap-10'>
                {/* Frontend technologies */}
                <img src="./fe/html.png" alt="html" height="50" width="50" />
                <img src="./fe/css.png" alt="css" height="50" width="50" />
                <img src="./fe/js.png" alt="js" height="50" width="50" />
                <img src="./fe/jquery.png" alt="jquery" height="50" width="50" />
                <img src="./fe/tailwind.png" alt="tailwind" height="50" width="50" />
                <img src="./fe/redux.png" alt="redux" height="50" width="50" />
                <img src="./fe/react.png" alt="react" height="50" width="50" />
                <img src="./fe/next.png" alt="next" height="50" width="50" />
              </div>
            </div>

            {/* Backend Development */}
            <div className='flex flex-col items-center gap-4'>
              <h3 className='text-3xl font-semibold'>BackEnd Development</h3>
              <div className='flex justify-center gap-10'>
                {/* Backend technologies */}
                <img src="./be/node.png" alt="node" height="50" width="50" />
                <img src="./be/expressjs.svg" alt="expressjs" height="50" width="50" />
                <img src="./be/mysql.png" alt="mysql" height="50" width="50" />
                <img src="./be/mongodb.png" alt="mongodb" height="50" width="50" />
              </div>
            </div>

            {/* MERN Stack */}
            <div className='flex flex-col items-center gap-4'>
              <h3 className='text-3xl font-semibold'>MERN Stack</h3>
              <div className='flex justify-center gap-10'>
                {/* MERN stack technologies */}
                <img src="./be/mongodb.png" alt="mongodb" height="50" width="50" />
                <img src="./be/expressjs.svg" alt="expressjs" height="50" width="50" />
                <img src="./fe/react.png" alt="react" height="50" width="50" />
                <img src="./be/node.png" alt="node" height="50" width="50" />
              </div>
            </div>

            {/* Common Tools */}
            <div className='flex flex-col  items-center gap-4'>
              <h3 className='text-3xl font-semibold'>Common Tools</h3>
              <div className='flex justify-center gap-10'>
                {/* Common tools */}
                <img src="./cmn/vs.png" alt="mongodb" height="50" width="50" />
                <img src="./cmn/git.png" alt="react" height="50" width="50" />
                <img src="./cmn/github.png" alt="node" height="50" width="50" />
              </div>
            </div>
          </div>
          {/* Scroll icon */}
          <ScrIcon />
        </div>
    </>
  );
}

export default Skills;
