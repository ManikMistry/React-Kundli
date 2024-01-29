import React, { memo } from 'react'

function Component2({perfrom}) {
    console.log("child")
  return (
    <div>Component2</div>
  )
}

export default memo(Component2)