import React, { createContext } from 'react'
import ChildB from './ChildB'

const data=createContext()
const data1=createContext();
function Parent() {

    const name="manik"
    const age=22;
  return (
    <div>
        <data.Provider value={name}>
        <data1.Provider value={age}>
            <ChildB/> 
        </data1.Provider>
        </data.Provider>
    </div>
  )
}

export default Parent
export {data,data1}