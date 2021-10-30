
import React,  {useState} from 'react'





export default function TextForm(props) {
  
    const handleup=()=> 
    {  
       console.log("clicked")
       //let newtext=text.toUpperCase();
       setstate(text.toUpperCase());
     }
     const handlelo=()=> 
     {  
        console.log("clicked")
        //let newtext=text.toUpperCase();
        setstate(text.toLowerCase());
      }
      const clear=()=> 
      {  
         console.log("text is cleared")
         //let newtext=text.toUpperCase();
         setstate("");
       }

     const handleonchange=(event)=>
     {
        console.log("handle on-changed")
       setstate(event.target.value)
        
     }
     
   

    const [text, setstate] = useState("")
   // setstate("yoyo")
    return (

 <div>
     
<div className="mb-3">
<h1>{props.headline} </h1>
<textarea className="form-control" id="exampleFormControlTextarea1"onChange={handleonchange} value={text}   rows="8"> </textarea>
</div>
<button className="btn btn-outline-success " onClick={handleup}>Convert to UpperCase</button>
<button className="btn btn-outline-success mx-1" onClick={handlelo}>Convert to LowerCase</button>
              
<button className="btn btn-outline-success mx-1" onClick={clear}>Clear Text</button>
       <h1 className="container bg-light my-3">Text Analysis</h1>
       <b>{text.length} characters </b>
<b>{text.split(" ").length} words</b>
        

        </div>
    )
}
