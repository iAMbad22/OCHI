import React, { useState } from 'react'
import CardComponent from './CardComponent';

function Cards() {
     const data = {n1:"FYDE",
                   n2:"VIKE",
                   n3:"TRAWA",
                   n4:"PREMIUM BLEND"
                  }
                    
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.09'  className='bg-[#F1F1F1]'>
        <h1 className='text-black bg-[#F1F1F1] text-[9vh] pt-20 pb-7 px-12 border-b-[1px] border-zinc-700'>Featured projects</h1>
          <CardComponent data={data}/>
    </div>
  )
}

export default Cards
