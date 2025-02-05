import React from 'react'

const About = () => {
  return (
    <div className="w-full p-20 rounded-tl-4xl rounded-tr-4xl bg-[#CDEA68] text-black">
      <h1 className='font-["Neue Montreal"] text-[3.8vw] leading-[4vw] tracking-tighter'>
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need toraise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      <div className="w-full border-t-[1px] pt-10 border-[#738146] mt-12 flex gap-6">
        <div className="w-1/2">
          <h1 className='text-7xl font-["Neue Montreal"]'>Our Approach:</h1>
          <button className="flex gap-6 uppercase items-center px-8 py-6 mt-8 bg-zinc-900 rounded-full text-white">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className='w-1/2 h-[70vh] bg-[#79894a] rounded-3xl overflow-hidden'>
        <img src='https://plus.unsplash.com/premium_photo-1682436315237-21f24c4c9f63?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
         className='w-full h-full object-cover'/>
        </div>
      </div>
    </div>
  );
}

export default About