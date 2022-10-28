import React,{useState} from 'react'
import  "./App.css"
import { Navigate,useNavigate } from 'react-router-dom';
function Firastpage() {
  const [inp, setInp] = useState("");
  const [search, setSearch] = useState("");
  const Navigate=useNavigate();
   const openres=()=>{
    Navigate("/repositories");
   }
  return (
    <div className='firstpage'>
        
        <form
        onSubmit={(e) => {
          e.preventDefault();
          setSearch(inp);
        }}>
     <h3>Enter your GitHub username</h3>
    <input placeholder='Enter username' className='input'  
    type="text"
    value={inp}
    onChange={(e) => setInp(e.target.value)}/>
    <button className='button' onClick={()=>openres()}>Submit</button>
    </form>
    <h2>Welcome to GitHub...</h2>
    </div>
  )
}

export default Firastpage;