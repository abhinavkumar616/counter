import { useState } from "react"


const App=()=>{

  const [counter, setCounter]=useState(0)

  const inc=()=>{
    setCounter(counter+1)
  }

  const dec=()=>{
    setCounter(counter-1)
  }

  return(
    <>
      <h1>{counter}</h1>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
    </>
  )
}

export default App