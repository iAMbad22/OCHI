import React from 'react'
import{ motion} from 'framer-motion'
import { FaArrowUpLong } from 'react-icons/fa6'
function Landing() {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.3'  className="w-full min-h-screen bg-[#F1F1F1] text-['Founders_Grotesk'] pt-2 text-lg">
        <div className='textstructure mt-52 px-20 text-black'>
        {["WE CREATE","Eye Opening","Presentations"].map((item,index) => (
            <div key={index} className='masker flex'>
                {index === 1 && <motion.div initial={{width:0}} animate={{width: "8vw"}} transition={{ease:[0.76, 0, 0.24, 1] , duration : 1}} className='ml-[1vw] mr-[1vw] mt-5 rounded-lg bg-red-500 h-[4.8vw] w-[8vw]'></motion.div>}
            <h1 className="font-['Founders_Grotesk'] leading-[6vw] tracking-tighter font-medium text-[7.5vw]">{item}</h1>
        </div>
        ))}
        </div>
        <div className='border-t-[2px] border-zinc-700 mt-44 flex items-center justify-between px-5 py-5 '>
            {["For public and private companies","From the first pitch to IPO"].map((item,index) => {
                return <p className='tracking-tighter font-light text-md leading-none text-black'>{item}</p>
        })}
            <div className='start flex items-center gap-3 group'>
                <div className='button  border-[2px] border-zinc-700 font font-light uppercase rounded-full px-5 group-hover:bg-black text-black duration-[300ms] group-hover:text-white'>Start the project</div>
                <div className='w-10 h-10 rounded-full border-[2px] border-zinc-700  flex justify-center items-center relative'>
                    <div className='bg-black h-0 w-0 rounded-full group-hover:w-full group-hover:h-full duration-[300ms]'></div>
                    <span className='absolute rotate-[-45deg] '>
                    <FaArrowUpLong className='text-black group-hover:text-white'/>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landing