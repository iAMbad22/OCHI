import React from 'react'

function UnderlineAnime({name}) {
  return (
    <div className='relative group overflow-hidden text-black'>
        {name}
        <span className='absolute top-[90%] left-0 group-hover:left-[100%] duration-[400ms] ease-in-out h-[1px] w-full bg-black'></span>
        <span className='absolute top-[90%] left-[-100%] group-hover:left-0 duration-[400ms] delay-[300ms] ease-in-out h-[1px] w-full bg-black'></span>
    </div>
  )
}

export default UnderlineAnime