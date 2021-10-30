
import './App.css';
import Navbar from './component.js/Navbar';
import TextForm from './component.js/TextForm';
import About from './component.js/About';
import Alert from './component.js/Alert'
import React, { useState } from 'react'
import alert from './component.js/Alert';

function App() {
  const [Mode, setMode] = useState('light')



const toglemode =()=>
  { 
        if(Mode==='dark'){
          setMode ('light')
          
          
        
        }
        else
       {
          setMode ('dark')
        }
   }
   

 
return (
    <>
   
   
   <Navbar heading = "My-lab" tab1="Home" tab2 = "AboutMy-lab" mode={Mode} toglemode = {toglemode} />
      
    <div className="container my-3">
      
   
   
     <TextForm headline="Enter the text below"  /> 
     
     <About />
    
     
    </div>
    
      
  
  
        </> ) 
}
  

   



export default App;
