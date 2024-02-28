import React, { useState } from 'react'
import {motion} from 'framer-motion'
function CardComponent({data}) {
    const [first,setFirst] = useState("FYDE");
    const [hovered,setHovered] = useState(false);
  return (
    <div>
        <div className='w-full h-[80vh] flex relative'>
            <div className='h-full w-1/2 pt-14 pl-12 pr-3'>
                <div className='flex justify-left items-center gap-4 pb-5'>
                    <div className='h-3 w-3 rounded-full bg-white'></div>
                    <div className='text-[2vh]'>{data.n1}</div>
                </div>
                <div onMouseEnter = {()=> {setHovered(true); setFirst(data.n1)}} onMouseLeave={()=> {setHovered(false)}} className=' h-[65vh] w-full flex items-center justify-center'>
                    <div className={`bg-[url("${data.u1}")] bg-cover bg-center h-full w-full hover:w-[90%] hover:h-[90%] rounded-2xl duration-300`}></div>
                </div>
            </div>
            <div className='absolute h-[7vh] overflow-hidden top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                {first.split('').map((item,index)=> (
                <span key={index} className={`text-white ${hovered ? "top-[-20%]" : "top-[100%]"} text-[7vh] relative duration-100 ease-in-out`}  >{item}
                </span>
                ))}
            </div>
            <div className='h-full w-1/2 pt-14 pr-12 pl-3'>
                <div className='flex justify-left items-center gap-4 pb-5'>
                    <div className='h-3 w-3 rounded-full bg-white'></div>
                    <div className='text-[2vh]'>{data.n2}</div>
                </div>
                <div  onMouseEnter = {()=> {setHovered(true); setFirst(data.n2)}} onMouseLeave={()=> {setHovered(false)}} className=' h-[65vh] w-full flex items-center justify-center'>
                    <div className={`bg-[url("${data.u2}")] bg-cover bg-center h-full w-full hover:w-[90%] hover:h-[90%] rounded-2xl duration-300`}></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardComponent