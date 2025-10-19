import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <div className="grid grid-cols-12 ">
      <div className=" bg-red-300 sm:col-span-5 col-span-12">
      Tailwind is working 🎉
    </div>
    <div className="bg-blue-300 sm:col-span-4 col-span-12">
      Tailwind is working 🎉
    </div>
    <div className="bg-green-300  sm:col-span-3 col-span-12">
      Tailwind is working 🎉
    </div>
    </div> */}
     <div className="flex flex-wrap ">
      <div className=" bg-red-300 w-full sm:w-5/12 flex items-center justify-center">
      Tailwind is working 🎉
    </div>
    <div className="bg-blue-300 w-full sm:w-4/12 flex items-center justify-center">
      Tailwind is working 🎉
    </div>
    <div className="bg-green-300  w-full sm:w-3/12 flex items-center justify-center">
      Tailwind is working 🎉
    </div>
    </div>
    </>
  )
}

export default App
