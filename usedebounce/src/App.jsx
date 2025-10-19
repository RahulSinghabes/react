import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDebounce } from './hook/usedebounce'

function App() {
  const [inputval, setinputval] = useState("")
  const debouncedvalue=useDebounce(inputval,500)
  function change(e){
    setinputval(e.target.value)
  }
  useEffect(()=>{
     console.log("expensive operation")
  },[debouncedvalue])
  return (
    <>
      <input type='text' onChange={change}></input>
    </>
  )
}

export default App
