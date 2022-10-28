import React,{useEffect,useState} from 'react'
import "./index.css"
import Home from './Home';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
function Description({post,setOpen}) {
    const[link,setLink]=useState(false);
    let avatar_url=`https://avatars.githubusercontent.com/u/${post.id}`
//     let followers_url=`https://api.github.com/users/${post.owner.name}/followers`
//  const ooopen=()=>{
//     console.log(post.owner.followers_url);
//     setLink(true);
//     if(link==true)
//   return <div>{followers_url}</div>
//  }
  return (
    <div className='dddes' key={post.id}>
    
        <div className='d11'>
            <img  className="imgg" src={avatar_url} alt=" "/>
           <div className='ddiv'><CheckCircleIcon className="checkbox"/> Verified by GitHub</div> 
            <p className='dd2'>GitHub confirms thst this app meets the <span> requirements for verification</span></p>
            <p className='dd3'>{post.description}</p>
            <h4>Categories</h4>
            <div className='pppppp'><p className='p1'>Code review</p> <p className='p2'>IDEs</p>
            <p className='p3'>Free</p><p className='p4'>Paid</p></div>
        </div>
           
            <div  className='aa'>
               <div> <p>Application</p>
                <h1>{post.name}</h1>

                <button  className=" buttond" onClick={()=> setLink(true) }>Set up a plan</button>
                <p><span >{post.name} </span> is the online IDE for GitHub</p>
                <p>It launches acomplete dev environment for any GitHub project, by simply prefixing the GitHub URL with {post.name}/#</p>
                
               
             <p>Install this app and get your project prebuilt, so you dont't have to wait for your build downloading the internet when starting {post.name} Workspace. 🚀</p>
            <p>{post.name} is the first IDE that builds your project before you even open it.</p></div>
            </div>


            {link && (<div className='home'>
       <Home post={post} link={link} setLink={setLink}/>
      </div>)}
     </div>

  )
}

export default Description