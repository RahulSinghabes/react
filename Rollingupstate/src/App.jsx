import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Lightbulb/>
    </>
  )
}
function Lightbulb(){
  const [bulbon, setbulbon] = useState(true)
  return (
    <>
    <Togglebulb setbulbon={setbulbon}/>
    <Bulbstate bulbon={bulbon}/>
    </>
  )
}
function Togglebulb({setbulbon}){
  function toggle(){
       setbulbon(c=>!c)
  }
  return(
    <button onClick={toggle}>toggle</button>
  )
}
function Bulbstate({bulbon}){
  return (
      bulbon?"bulbon":"bulboff"
  )
}

export default App
