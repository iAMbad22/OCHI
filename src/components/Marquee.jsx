import React from 'react'

function Marquee() {
  return (
    <div className='w-full h-[50vh] bg-[#004D43] py-20 rounded-3xl'>
        <div className=' border-b-2 border-t-2 border-zinc-300 flex items-center gap-14 overflow-hidden whitespace-nowrap'>
        {["We Are Ochi", "We Are Ochi", "We Are Ochi", "We Are Ochi"].map((text, index) => (
            <h1 key={index} className="uppercase text-[19vw] leading-[0.8] font-['Founders_Grotesk'] inline-block font-semibold tracking-tighter mb-3 animate-move4 " >
              {text}
            </h1>
          ))}
        </div>
    </div>
  )
}

export default Marquee


