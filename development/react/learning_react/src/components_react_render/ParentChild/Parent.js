import React, { useState } from "react";
import { Child } from "./Child";

export const Parent = () => {
  const [count, setCount] = useState(0);

  console.log("Parent Render");
  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Count - {count}
      </button>
      <button onClick={() => setCount(0)}>Set to 0</button>
      <button onClick={() => setCount(5)}>Set to 5</button>
      <Child />
    </div>
  );
};
