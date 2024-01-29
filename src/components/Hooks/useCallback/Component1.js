import React, { useCallback, useState } from 'react'
import Component2 from './Component2'

function Component1() {
    const[value,setValue]=useState(0);
    // console.log("child")
    const increaseValue=()=>{
        setValue(value+1)
    }
   const learing= useCallback(
        function perform(){
        },[])
  return (
    <div>
    <p>value:{value}</p>
    <button onClick={increaseValue}>add</button>
        <Component2 learing={learing}/>
    </div>
  )
}

export default Component1