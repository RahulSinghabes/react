import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Post>
      <h2>Card title</h2>
      <p>this is my card</p>
    </Post>
    <Post>
      <h2>Card title another </h2>
      <p>this is my different card</p>
    </Post>
    </>
  )
}
const  Post=({children})=>{
  return(
    <div style={{border:"1px solid #ccc",borderRadius:"5px",padding:"20px",margin:"10px",boxShadow:"2px 2px 2px 2px rgba(0,0,0,0.1)"}}>
        {children}
    </div>
  )
}

export default App
