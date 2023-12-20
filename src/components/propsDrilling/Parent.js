import React from 'react'
import ChildA from './ChildA'

function Parent() {
    const name="manik"
  return (
    <>
    <ChildA name={name}/>
    </>
  )
}

export default Parent