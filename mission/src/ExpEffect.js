import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button';

const ExpEffect = () => {
    const [num1,setNum1] = useState(0);
    const [num2,setNum2] = useState(0);
    // const show=()=>{
    //     console.log("hello bhai");
    // }

const Add = ()=>{
// let result = ParseIntbyvalue(num1)+ParseIntbyvalue(num2) ; 
// console.log(result);
}
Add()
useEffect(()=>{
    // console.log("hello useeffect..1");
    
});


  return (
    <div>
    Num1: <input type='number' value={num1} onChange={(e)=>setNum1(e.target.value)}></input>
    <Button onClick={()=>setNum1()}>click1</Button><br/>
    <br/>

    Num2: <input type='number' value={num2} onChange={(e)=>setNum2(e.target.value)}></input>
    <Button onClick={()=>setNum2()}>click2</Button><br/>

    <Button onClick={()=>Add()}>Result</Button>
    </div>
  )
}

export default ExpEffect