import React from 'react'
import"./pages.css";
// import Description from './description';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {useState} from "react"
import { Navigate,useNavigate } from 'react-router-dom';
import Description from './description';
import { PostAddRounded } from '@material-ui/icons';
function Pages({post}) {
  const[open,setOpen]=useState(false);
  
  const Navigate=useNavigate();
  const opendes=( )=>{
    setOpen(true);
      
      // Navigate("/description");
    }
  
  
  let avatar_url=`https://avatars.githubusercontent.com/u/${post.id}`
        return (
        <div className='ppages'  key={post.id} onClick={()=>setOpen(true)} >
    
        <div className='pp1' style={{ margin: `50px`, display: `flex`, flexDirection: `row` }}>
    <div className="e-card e-card-horizontal" style={{ width: `400px` }}>
       <div> <img className='iimg' key={post.id} src={avatar_url} alt="Sample" style={{ height: `40px` }}/></div>
        <div className="e-card-stacked">
            <div className="e-card-header">
                <div className="e-card-header-caption">
                    <div className="e-card-header-title" >{post.name}<CheckCircleIcon className="checkbox"/></div>
                </div>
            </div>
            <div className="e-card-content">
                {post.description}
            </div>
        </div>
    </div>
 
    {open && (<div className='drop'>
         {/* <img src={avatar_url} />
         <div className='dname'>{post.name}</div>
         <div className='ddes'>{post.description}</div> */}
       <Description post={post} open={open} setOpen={setOpen}/>
      </div>)}



  </div>

    





    </div>
  );
}

export default Pages