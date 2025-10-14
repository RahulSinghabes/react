import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [posts, setposts] = useState([])
  const postcomponent=posts.map(post=><PostComponent name={post.name} subtitle={post.subtitle} time={post.time} content={post.content}/>)
  function addPost(){
      setposts([...posts,{
          name:"Rahul singh",
          subtitle:"20 followers",
          time:"2m ago",
          content:"i like to announce my new start up"
       },])
  }
  return (
    
    <div style={{backgroundColor:'pink',height:"100vh",}}>
      <button onClick={addPost}>add post</button>
    <div style={{display:'flex',justifyContent:'center'}}>
      <div>
          {postcomponent}
      </div>
    </div>
   </div> 
    
  )
}
function PostComponent({name,subtitle,time,content}){
    return (
   <div  style={{width:300 ,height:100,backgroundColor:'skyblue', borderRadius:20,padding :10,margin:0}}>
     <div style={{display:"flex"}}>
          <img src={"/bird.jpg"} alt='bird' style={{width:40, height:40, borderRadius:"50%" ,margin:10}}></img>
          <div>
              <b>
                 {name}
              </b>
              <div>
                 {subtitle}
              </div>
              {time && <div style={{display:"flex"}}>
                <div>
                 {time}
              </div>
              <div>
                <img src="https://tse1.mm.bing.net/th/id/OIP.MERjCbfyuPtidJPOQzKpwgHaHb?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" alt="clock" style={{height:9,width:9,borderRadius:"50%",marginLeft:4,marginTop:6}}></img>
              </div>
              </div>}
              
          </div>
     </div>
     <div>{content} </div>
</div>
  );

}

export default App
