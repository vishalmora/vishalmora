import React,{useEffect,useState} from 'react'
import "./index.css";
import App from './App';
import Pages from "./pages"
import Description from './description';
import { json } from 'react-router-dom';

function Repositories() {
  const [user,setUser] = useState([]);
  useEffect(() => {
   
    fetch('https://api.github.com/users/mralexgray/repos')
    .then((res) =>res.json())
    .then(data=>setUser(data))
  // console.log(user)
  }, []);
  return (
    <div className='post11'>
     
   {user.map(post=> 
      
   <div className='post' key={post.id}>
     <Pages
      post={post}

     />

<div style={{display:`none`}}><Description post={post}/></div>

   {/* <img className='postimg' src={post.owner.avatar_url} alt='no'/> */}
   
   </div>
   )}
    </div>
  )
}

export default Repositories