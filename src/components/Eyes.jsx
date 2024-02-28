import React, { useEffect, useState } from 'react'

function Eyes() {
    const [FaRotate,setRotate] = useState(0);
    const [delX,setdelX] = useState(0);
    const [delY,setdelY] = useState(0);
    useEffect(() => {
        window.addEventListener("mousemove",(e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaY = mouseY - window.innerHeight/2;
            let deltaX = mouseX - window.innerWidth/2;
            setdelX(deltaX);
            setdelY(deltaY);

            var angle = Math.atan2(deltaY ,deltaX) * (180/Math.PI);
            setRotate(angle-180);
        })
    })
  return (
    <div className='h-screen w-full bg-red-500 overflow-hidden'>
        <div className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
            <div data-scroll data-scroll-section data-scroll-speed="-.1" className='absolute flex gap-10 top-1/3 left-[35%] -translate-x-[50%] -translate-y-[50%]'>
                <div className='h-[15vw] bg-zinc-100 w-[15vw] rounded-full relative'>
                    <div style={{transform:`translate(-${(50 - (delX)/50)}%, -${(50 - (delY)/50)}%)`}} className='absolute w-2/3 h-2/3 rounded-full bg-black top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                        <div style={{transform: `translate(-50%,-50%) rotate(${FaRotate}deg)`}} className={`absolute w-full  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]`}>
                            <div className='w-10 h-10 rounded-full bg-white '></div>
                        </div>
                    </div>
                </div>
                <div className='relative h-[15vw] bg-zinc-100 w-[15vw] rounded-full'>
                    <div style={{transform:`translate(-${(50 - (delX)/52)}%, -${(50 - (delY)/50)}%)`}} className='absolute w-2/3 h-2/3 rounded-full bg-black top-1/2 left-1/2'>
                        <div style={{transform: `translate(-50%,-50%) rotate(${FaRotate}deg)`}}  className='absolute w-full top-1/2 left-1/2 '>
                            <div className='w-10 h-10 rounded-full bg-white '></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes