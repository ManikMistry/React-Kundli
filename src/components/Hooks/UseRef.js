import React,{useState,useRef} from "react";

const UseRef=()=>{
    const [name,setName]=useState("");

    const setRef=useRef("")

    const reset=()=>{
        setName("")
        setRef.current.focus();
        setRef.current.style.color=""
    }
    const colorChange=()=>{
        setRef.current.style.color="red"
    }
    return(
        <>
        <div>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} ref={setRef}/>
            <button onClick={reset}>reset</button>
            <button onClick={colorChange}>change</button>
        </div>
        </>
    )
}
  export default UseRef;