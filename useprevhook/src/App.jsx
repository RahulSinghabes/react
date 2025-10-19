import { useState } from 'react'

import './App.css'
import { usePrev } from './hook/useprev'

function App() {
  const [count, setCount] = useState(0)
  const prev=usePrev(count)
  function increase(){
    setCount(count+1)
  }
  return (
    <>
    <div>This is my current value {count}</div>
    <button onClick={increase}>Click me</button>
    <div>This is my previous value {prev}</div>
    </>
  )
}

export default App
