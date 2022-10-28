import React, { useEffect, useState } from 'react';
import "./home.css"
import {Data} from "./Data.js"
import { Button } from '@material-ui/core';

export default function Home({post,setLink,link}){
    return(
<div className='hhhome'>
<p>Followers for current users are below...</p>
<button onClick={setLink(false)}>X</button>
{Data.team.map(name=>{
  
  <div>{name.login}</div>
  console.log(name.login)
  
})}
</div>



    )



}