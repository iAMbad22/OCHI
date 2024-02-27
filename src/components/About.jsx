import React, { useState } from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'

function About() {
    const [hover,setHover] = useState(false)
  return (
    <div className='w-full rounded-tr-3xl rounded-tl-3xl bg-[#CDEA69] p-20 text-black'>
        <h1 className='font-["Neue_Montreal"] mr-[200px] text-[3.8vw] leading-[3.1vw]'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        <div className='border-t-[1px] pt-10 mt-20 border-[#a5c043] flex gap-10'>
            <div className='w-1/2'>
                <h1 className='text-7xl'>Our Approches:</h1>
                <button onMouseEnter = {()=> setHover(true)} onMouseLeave = {()=> setHover(false)} className='bg-zinc-800 hover:bg-zinc-900 text-white mt-10 rounded-full pl-10 pr-5  flex items-center justify-between uppercase h-[7vh] w-[13vw] group '>Read More
                <div className='w-16 h-16 rounded-full flex items-center justify-center'>
                    <div className='h-2 w-2 bg-white rounded-full group-hover:h-full group-hover:w-full flex items-center justify-center duration-500'><FaArrowUpLong className='text-white text-[0.5vh] group-hover:text-[2vh] group-hover:text-black group-hover:rotate-[45deg] duration-500'/></div>
                </div>
                </button>
            </div>
            <div className='h-[70vh] w-1/2 rounded-3xl flex items-center justify-center'>
                <img className={`object-cover h-full w-full rounded-3xl ${hover && "h-[90%] w-[90%]"} duration-300`} src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About
