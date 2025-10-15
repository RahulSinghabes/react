import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const usetimer=useRef()
  function start(){
     let timer=setInterval(function(){
      setCount(c=>c+1);
      usetimer.current=timer
      console.log(usetimer.current);
     },1000)
    }
    function  stopper(){
      
      clearInterval(usetimer.current);
    }
  
  return (
    <>
     <div>{count}</div>
     <button onClick={start}>start</button>
     <button onClick={stopper}>stop</button>
    </>
  )
}

export default App
