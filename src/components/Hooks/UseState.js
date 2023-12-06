import React, { useEffect, useState } from 'react'

function UseState() {
    const [value, initialValue]= useState(0);

    const increment=()=>{
        initialValue(value+1);
        console.log("increment Button triggerd")
    }
    const decrement=()=>{
        initialValue(value-1);
        console.log("decrement Button triggerd")
    }
    useEffect(()=>{
        console.log("hello")
    },[])
  return (
    <div>
        <p>{value}</p>
        <button onClick={decrement}>decrement</button>
        <button onClick={increment}>increment</button>
    </div>
  )
}

export default UseState
