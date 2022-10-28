import React from 'react'
import Firastpage from './firastpage'
import {Routes,Route,BrowserRouter} from "react-router-dom";
import Repositories from './repositories';
import Description from './description';

function App() {
  return (
    <div>


      
      <BrowserRouter>
<Routes>
  <Route exact path='/' element={<Firastpage/>}/>
  <Route exact path='/repositories' element={<Repositories/>}/>
  <Route exact path='/description' element={<Description/>}/>
</Routes>
</BrowserRouter>
   
 </div>
  )
}

export default App