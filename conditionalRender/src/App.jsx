import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [countervisible, setcountervisible] = useState(true);
  const [count, setCount] = useState(0);
   useEffect(function(){
        const id=setInterval(function(){
        setcountervisible(c=>!c)
        },5000)
         
    },[])
  return (
    <>
      {countervisible && <Counter count={count} setCount={setCount} countervisible={countervisible}></Counter>}
    </>
  )
}
function Counter(props){
    
    useEffect(function(){
         let id;

    // Start counting only when visible
    
      id = setInterval(() => {
        props.setCount(c => c + 1);
      }, 1000);
    
        return () => clearInterval(id);
    },[props.countervisible])
    return(
       <div>{props.count}</div>
    )
}

export default App
