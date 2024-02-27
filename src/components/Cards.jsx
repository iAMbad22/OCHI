import React, { useState } from 'react'
import CardComponent from './CardComponent';

function Cards() {
     const data = {n1:"FYDE",
                   n2:"VIKE",
                   u1:"https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png",
                   u2:"https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                  }
    const data2 = {n1:"TRAWA",
                   n2:"PREMIUM BLEND",
                   u1:"https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg",
                   u2:"https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png"
                   }     
  return (
    <div className='bg-zinc-800'>
        <h1 className='text-white bg-zinc-800 text-[9vh] pt-20 pb-7 px-12 border-b-[1px] border-zinc-700'>Featured projects</h1>
          <CardComponent data={data}/>
          <CardComponent data={data2}/>
    </div>
  )
}

export default Cards
