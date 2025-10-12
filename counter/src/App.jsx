import React, { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Button count={count} setCount={setCount}></Button>
      </div>
    </>
  )
}
function Button(props){
  console.log (props)
     function buttonclick(){
         props.setCount(props.count +1);
     }
     return(
         React.createElement("button",{onClick: buttonclick },`counter ${props.count}`)
     );
     
         
}

export default App
