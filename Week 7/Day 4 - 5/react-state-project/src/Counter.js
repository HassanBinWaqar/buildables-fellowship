import React, { useState } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h2>Counter Example</h2>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
