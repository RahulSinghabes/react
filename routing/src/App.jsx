import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import{ BrowserRouter,Routes,Route,Link,useNavigate, Outlet } from 'react-router-dom'
import './App.css'

function App() {
 

  return (
    <>
    <BrowserRouter>
    
    <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/Neet/class-11" element={<Class11/>}/> 
        <Route path="/Neet/class-12" element={<Class12/>}/> 
        <Route path="/Neet" element={<Landing/>}/> 
        <Route path="/" element={<Home/>}/> 
        <Route path="*" element={<ErrorPage/>}/> 
        </Route>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}
function Home(){
  return (
  <div>this is the home page</div>
  )
}
function Layout(){
   return (
    <div style={{height:"100vh",background:"green"}}>
    <Link to={"/"} >Allen</Link> |
    <Link to={"/Neet"} >NEET</Link> |
    <Link to={"/Neet/class-11"} >Class11</Link> |
    <Link to={"/Neet/class-12"} >Class12</Link>
     <div style={{height:"90vh",background:"red"}}>
    <Outlet/>
    </div>
    footer
    </div>
   )
}
function Class11(){
  return (
    <div>Welcome to class 11</div>
  )

}
function ErrorPage(){
  return (
    <div> sorry page not found</div>
  )
}
function Class12(){
  const navigate=useNavigate()
  function redirect(){
     navigate("/")
  }
  return (
    <>
    <div>Welcome to class 12</div>
    <button onClick={redirect}>GO TO THE HOME PAGE</button>
    </>
  )

}
function Landing(){
  return (
    <div>Welcome to class NEET journey</div>
  )

}

export default App
