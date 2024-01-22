import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [size, setSize] = useState(window.screen.width)

  const currentScreenSize = () => {
    setSize(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener("resize", currentScreenSize)
    return () => {
      window.removeEventListener('resize', currentScreenSize)

    }
  })
  return (
    <>
      <h1 className='text-yellow-400'>my computer screen size is {size}</h1>
    </>
  )
}

export default App
