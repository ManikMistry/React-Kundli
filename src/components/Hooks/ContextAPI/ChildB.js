import React, { useContext } from 'react'
import { data,data1 } from './Parent'

function ChildB() {
    const name=useContext(data);
    const age=useContext(data1);
  return (
   <>
   <h1>My name is {name} and I am {age} years old.</h1>
    {/* <data.Consumer>
        {
            (name)=>{
                return(
                   <data1.Consumer>
                    {
                        (age)=>{
                            return(
                                <h1>my name is {name} and Iam {age} years old</h1>
                            )
                        }
                    }
                   </data1.Consumer>
                )
            }
        }
    </data.Consumer> */}
   </>
  )
}

export default ChildB