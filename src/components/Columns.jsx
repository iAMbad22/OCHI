import React from 'react'
import UnderlineAnime from './UnderlineAnime'
import LocomotiveScroll from 'locomotive-scroll';


function Columns() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='bg-zinc-800 py-12'>
        <div className='border-t-[1px] border-zinc-600'>
            <div>
                {["Planetly","Workiz Easy","Premium Blend","Hypercare Systems","Officevibe","Orderlion","Black Book","Trawa Energy"].map((item,index)=> (
                    <div key={index} className='flex justify-between px-14 text-[1.1vw] py-6 border-b-[1px] border-zinc-500'>
                        <UnderlineAnime name={item}/>
                        <h1>Nina Walloch</h1>
                        <UnderlineAnime name="Read"/>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Columns