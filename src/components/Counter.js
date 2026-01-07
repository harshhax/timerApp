import React, { useState } from 'react'

function Counter() {
    // creating a state variable 'count' for storing the count value
    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount(count + 1);
    }
    const decremeent = () =>{
      if(count>0)
        setCount(count-1);
    }

  return (
    <div>
      <button onClick={increment}>Increment + </button>
      <h2>Count: {count}</h2>
      <button onClick={decremeent} disabled={count==0}>Decrement - </button>
    </div>
  )
}

export default Counter