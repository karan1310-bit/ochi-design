import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="mt-44 px-8 md:px-16">
        {["We Create", "Eye-Opening", "Presentations"].map((text, index) => (
          <h1
            key={index}
            className='uppercase text-5xl md:text-8xl md:leading-[6vw] leading-[12vw] tracking-tighter font-medium font-["Founders Grotesk"]'
          >
            {text}
          </h1>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-64 md:mt-32 flex flex-col md:flex-row md:justify-between gap-6 md:items-center py-8 px-6 md:px-20">
        {[
          "For public and private company",
          "From the first slide to the last",
        ].map((text, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tight leading-none"
          >
            {text}
          </p>
        ))}
        <div className='flex items-center gap-2'>
          <div className="px-6 py-2 border-[1px] uppercase border-zinc-500 rounded-full font-light text-sm">
            Start the Project
          </div>
          <div className="w-[2.4vw] h-[2.4vw] flex items-center justify-center border-[1.5px] border-zinc-500 rounded-full">
            <span className="  rotate-[45deg]  ">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage