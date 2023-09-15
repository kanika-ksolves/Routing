import React from 'react'

const HOC = (props) => {
  return (
     <h1 style={{backgroundColor:'aqua', width:100}}><props.cmp/></h1>    
  )
}

export default HOC
