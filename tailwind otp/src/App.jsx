import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from './components/button'
import { Input } from './components/input'
import { Otp } from './components/otp'


function App() {
  
  return (
    <>
    <div className="h-screen flex  justify-center bg-blue-950">
      <div className="flex flex-col gap-20 ">
      <div className='text-4xl  text-green-400 mt-16 pl-35'>webinar<span className='text-4xl  text-white'>.gg</span></div>
     
      <div className='text-3xl font-bold text-white pl-30'>verify your age</div>
      
      <div className={"text-white tracking-widest"} > please confirm your birth year. this will not be stored
        <div className="flex flex-col gap-2 ">
          <Otp/>
         <Input type={"text"} placeholder={"username"}></Input>
         <br />
         < Button disabled={true}> submit</Button>
         </div>
      </div>  
      </div>
     
    </div>
    
    </>
  )
}

export default App
