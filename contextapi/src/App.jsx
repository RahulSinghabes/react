import { createContext,useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Bulbcontext=createContext();
function  BulbProvider({children}){
   const [bulbon, setbulbon] = useState(true)
  return (
      <Bulbcontext.Provider value={{
       bulbon:bulbon,
       setbulbon:setbulbon
    }}>
     {children}
      </Bulbcontext.Provider>
  )
}
function App() {
  return (
    <>
    {/* wrapper function in which children is what is written */}
    <BulbProvider>  
      <Light/>
      </BulbProvider>
    </>
  )
}
function Light(){
  return (
    <>
   <Lightbulb/>
   <Lightswitch/>
    </>
  )
}
function Lightbulb(){
  const {bulbon}=useContext(Bulbcontext)
  return (
     bulbon?<img src="https://static.vecteezy.com/system/resources/previews/017/458/891/non_2x/light-bulb-with-shining-light-cartoon-style-flat-style-hand-drawn-style-doodle-style-symbol-of-creativity-innovation-inspiration-invention-and-ideas-illustration-vector.jpg"/>:
     <img src="https://cms-artifacts.artlist.io/content/motion-array/366781/Incandescent_Light_Bulb_Off_high_resolution_preview_366781.jpg?Expires=2036648404221&Key-Pair-Id=K2ZDLYDZI2R1DF&Signature=CpfgEFyW7A9zWVLo-aCuk0tMjVQ5UzT0P0rKViA~~JFfQEjOKzTT9udRuC2csnXG965SqNjWxYWnOanxW-QMJxt-M5NKbjsPi5DkC9knbe2oA2ir3YnKUNoFIr0zRC55ASuu439O-t7x2smugfPCDWIyrs7FhNgqvQ7ivvVaDGxz~T6aSdTpZ8AxiHo~~cwFtaPasBKfYGTNvyB66QEaUdLVU2K8BXqrbIwlOjmoFxsMMdKxWUy1F9M6rH1URSFhVOrvtRL8LZMkAD6j0t0nnX9OBJP0YWxgSmqVZnYZ933ZEDsuA2z8-gRYIrb7do1sPbzx6l6HiZ87g9-Z5ftBng__" style={{height:100,width:100}}/>
  )
}
function Lightswitch(){
    const {setbulbon}=useContext(Bulbcontext)
    function toggle(){
      setbulbon(c=>!c)
    }
    return(
      <button onClick={toggle}>toggle bulb</button>
    )
}


export default App
