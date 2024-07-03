import { useState } from "react"

const Demo = () => {
  const [count,setCount]=useState(0)
  const [increment,setIncrement]=useState(1)
  const addNumber=()=>{
    setCount(count+increment)
  }
  const deleteNum =()=>{
    setCount(count-increment)
  }
  const incrementNum =()=>{
    setIncrement(increment+1)

  }
  const decrementNum =()=>{
    setIncrement(increment-1)

  }
  return (
    <div>
      <h1>Counter Number is:{count}</h1>
      <button onClick={addNumber} className="mr-2">Add Number</button>
      <button onClick={deleteNum}>Delete Number</button>

       <h1 className="mt-2">Increment And Decrement number:{increment}</h1>
       <button onClick={incrementNum} className="mr-2">Increment</button>
       <button onClick={decrementNum}>Decrement</button>

    </div>
  )
}
export default Demo