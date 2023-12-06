import React, {useState } from 'react'

function UseState() {
    const [value, setValue]= useState(0);
    const setStyle=()=>{
        if(value<0){
            return "red";
        }else if(value>=0 && value<=10){
            return "green";
        }else{
            return "yellow"
        }
    }
  return (
    <div>
        <p style={{backgroundColor:setStyle(),height:"10vh", width:"10vh", textAlign:"center", margin:"auto"}}>{value}</p>
        <button onClick={()=>setValue(value-1)}>decrement</button>
        <button onClick={()=>setValue(value+1)}>increment</button>
        <button onClick={()=>setValue(0)}>reset</button>
    </div>
  )
}

export default UseState
