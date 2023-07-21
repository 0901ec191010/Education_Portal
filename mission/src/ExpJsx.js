import React from 'react'

const ExpJsx = () => {
  let a=34;
let array = [1,2,3,4,5];
  return (
    <div>  
    helllo rwact <br/>
    {a}<br/>
    {3+9} <br/> 
  {array.map(arr=>{
    return <h1>{arr*arr}</h1>
  })}
    </div>
  )
}

export default ExpJsx
