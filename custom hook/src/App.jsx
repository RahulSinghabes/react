import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function useCounter(){
    const [count, setCount] = useState(0)

    function increament(){
      setCount(count+1)
    }
    return({
       count:count,
      increament:increament
    })
}
function App() {
  return (
    <>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
    </>
  )
}
function Counter(){
  const{count,increament} =useCounter()
  return (
    <div>
    <button onClick={increament}>{"count" + count}</button>
    </div>
  )
  
}

export default App
