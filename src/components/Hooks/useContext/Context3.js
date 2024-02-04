import React, { useContext } from 'react'
import { data,data2 } from './Conext1'
function Context3() {
    const name=useContext(data);
    const age=useContext(data2);
  return (
    <>
        <h1>My name is {name} and Iam {age} years old</h1>
    </>
  )
}

export default Context3