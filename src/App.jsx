import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <p className='text-3xl text-white bg-red-900 p-4 m-4 rounded-2xl flex '>Initializing Project</p>
    </>
  )
}

export default App
