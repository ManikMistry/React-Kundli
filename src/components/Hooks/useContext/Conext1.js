import React, { createContext } from 'react'
import Context3 from './Context3';

const data=createContext();
const data2=createContext();
function Conext1() {
    const name="manik";
    const age=23;
  return (
    <>
        <data.Provider data={name}>
            <data2.Provider data2={age}>
            <Context3/>
            </data2.Provider>
        </data.Provider>
    </>
  )
}

export default Conext1
export {data, data2}