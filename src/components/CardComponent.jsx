import React, { useState } from 'react'
function CardComponent({data}) {
    const [first,setFirst] = useState("FYDE");
    const [hovered,setHovered] = useState(false);
    const [second,setSecond] = useState("FYDE");
    const [hovered1,setHovered1] = useState(false);    
  return (
    <div>
        <div className='w-full h-[80vh] flex relative'>
            <div className='h-full w-1/2 pt-14 pl-12 pr-3'>
                <div className='flex justify-left items-center gap-4 pb-5'>
                    <div className='h-3 w-3 rounded-full bg-black'></div>
                    <div className='text-[2vh] text-black'>{data.n1}</div>
                </div>
                <div onMouseEnter = {()=> {setHovered(true); setFirst(data.n1)}} onMouseLeave={()=> {setHovered(false)}} className=' h-[65vh] w-full flex items-center justify-center group'>
                    <div className={`bg-[url("https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png")] bg-cover bg-center h-full w-full group-hover:w-[90%] group-hover:h-[90%] rounded-2xl duration-300`}></div>
                </div>
            </div>
            <div className='absolute h-[7vh] overflow-hidden top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                {first.split('').map((item,index)=> (
                <span key={index} className={`text-[#e1ed56] ${hovered ? "top-[-20%]" : "top-[100%]"} text-[7vh] font-bold relative duration-100 ease-in-out`}  >{item}
                </span>
                ))}
            </div>
            <div className='h-full w-1/2 pt-14 pr-12 pl-3'>
                <div className='flex justify-left items-center gap-4 pb-5'>
                    <div className='h-3 w-3 rounded-full bg-black'></div>
                    <div className='text-[2vh] text-black'>{data.n2}</div>
                </div>
                <div  onMouseEnter = {()=> {setHovered(true); setFirst(data.n2)}} onMouseLeave={()=> {setHovered(false)}} className='group h-[65vh] w-full flex items-center justify-center'>
                    <div className={`bg-[url("https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg")] bg-cover bg-center h-full w-full group-hover:w-[90%] group-hover:h-[90%] rounded-2xl duration-300`}></div>
                </div>
            </div>
        </div>
        <div className='w-full h-[80vh] flex relative'>
            <div className='h-full w-1/2 pt-14 pl-12 pr-3'>
                <div className='flex justify-left items-center gap-4 pb-5'>
                    <div className='h-3 w-3 rounded-full bg-black'></div>
                    <div className='text-[2vh] text-black'>{data.n3}</div>
                </div>
                <div onMouseEnter = {()=> {setHovered1(true); setSecond(data.n3)}} onMouseLeave={()=> {setHovered1(false)}} className=' h-[65vh] w-full flex items-center justify-center group'>
                    <div className={`bg-[url("https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg")] bg-cover bg-center h-full w-full group-hover:w-[90%] group-hover:h-[90%] rounded-2xl duration-300`}></div>
                </div>
            </div>
            <div className='absolute h-[7vh] overflow-hidden top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                {second.split('').map((item,index)=> (
                <span key={index} className={`text-[#effc68] ${hovered1 ? "top-[-20%]" : "top-[100%]"} text-[7vh] font-bold relative duration-100 ease-in-out`}  >{item}
                </span>
                ))}
            </div>
            <div className='h-full w-1/2 pt-14 pr-12 pl-3'>
                <div className='flex justify-left items-center gap-4 pb-5'>
                    <div className='h-3 w-3 rounded-full bg-black'></div>
                    <div className='text-[2vh] text-black'>{data.n4}</div>
                </div>
                <div  onMouseEnter = {()=> {setHovered1(true); setSecond(data.n4)}} onMouseLeave={()=> {setHovered1(false)}} className='group h-[65vh] w-full flex items-center justify-center'>
                    <div className={`bg-[url("https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png")] bg-cover bg-center h-full w-full group-hover:w-[90%] group-hover:h-[90%] rounded-2xl duration-300`}></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardComponent