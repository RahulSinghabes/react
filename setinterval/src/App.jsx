import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log("count")
  useEffect(function(){
  setInterval(function(){
     setCount(count => count+1)
  },1000)
},[])
  // function clicked(){
  //   setCount(count+1);
  // }
  return (
    <>
      <div >{count}</div>
      
    </>
  )
}

export default App
