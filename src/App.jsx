import { useState } from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Cards from './components/Cards'
import Columns from './components/Columns'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-screen w-full text-white'>
        <Navbar />
        <Landing />
        <Marquee />
        <About />
        <Eyes />
        <Cards />
        <Columns />
      </div> 
    </>
  )
}

export default App
