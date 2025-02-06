import React, { useEffect, useState } from 'react'

const Eyes = () => {

    const [rotate, setRotate] = useState(0)

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let x = e.clientX;
            let y = e.clientY;

            let deltaX = x - window.innerWidth / 2;
            let deltaY = y - window.innerHeight / 2;

            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle -180)
        })
    }, [])

  return (
    <div className='w-full h-screen overflow-hidden'>
        <div className='relative w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")] bg-cover bg-center'>
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100 ">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900 ">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-12 h-10"
              >
                <div className="w-[2vw] h-[2vw] rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900 ">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-12 h-[2.8vw]"
              >
                <div className="w-[2vw] h-[2vw] rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Eyes