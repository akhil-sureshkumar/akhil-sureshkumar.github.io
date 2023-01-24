import React from "react";

import python from "../assets/python.png";
import c from "../assets/c.png";
import javascript from "../assets/javascript.png";
import reactlogo from "../assets/react.png";
import postgresql from "../assets/postgresql.png";
import github from "../assets/github.png";

const Experience = () => {

  return (
    <div name="experience" className="w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black">
        <div>
          <p className="text-4xl font-bold">
            Experience
          </p>
        </div>

        <div className="w-full grid grid-cols-4 gap-8 text-center py-8">

          <div className='bg-gray-800 shadow-lg hover:scale-105 duration-500 py-4 rounded-full w-full shadow-blue-600'>
            <img src={c} alt="" className="w-32 mx-auto" />
            <p className="mt-4 text-white font-bold">C</p>
          </div>
          <div className='bg-gray-800 shadow-lg hover:scale-105 duration-500 py-4 rounded-full w-full shadow-yellow-500'>
            <img src={python} alt="" className="w-36 mx-auto" />
            <p className="mt-4 text-white font-bold">Python</p>
          </div>
          <div className='bg-gray-800 shadow-lg hover:scale-105 duration-500 py-4 rounded-full w-full shadow-yellow-600'>
            <img src={javascript} alt="" className="w-64 mx-auto" />
            <p className="mt-4 text-white font-bold">JavaScript</p>
          </div>
          <div className='bg-gray-800 shadow-lg hover:scale-105 duration-500 py-4 rounded-full w-full shadow-sky-500'>
            <img src={reactlogo} alt="" className="w-40 mx-auto" />
            <p className="mt-4 text-white font-bold">React</p>
          </div>
          <div className='bg-gray-800 shadow-lg hover:scale-105 duration-500 py-4 rounded-full w-full shadow-sky-700'>
            <img src={postgresql} alt="" className="w-[142px] mx-auto" />
            <p className="mt-4 text-white font-bold">PostGreSQL</p>
          </div>
          <div className='bg-gray-800 shadow-lg hover:scale-105 duration-500 py-4 rounded-full w-full shadow-gray-500'>
            <img src={github} alt="" className="w-[142px] mx-auto" />
            <p className="mt-4 text-white font-bold">GitHub</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Experience