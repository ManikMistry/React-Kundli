import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [add,setAdd]=useState(0);
    const [sub,setSub]=useState(100);

    const multiplication=useMemo(
    function mul(){
        console.log("********")
        return add*10;

    },[add])
  return (
    <>
        <p>add:{add}</p>
        <p>sub:{sub}</p>
        <p>mul:{multiplication}</p>


        <button onClick={()=>setAdd(add+1)}>add</button>
        <button onClick={()=>setSub(sub-1)}>sub</button>

    </>
  )
}

export default UseMemo