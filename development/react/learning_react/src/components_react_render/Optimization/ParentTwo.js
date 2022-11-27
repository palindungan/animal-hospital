import React, { useState } from "react";
import { MemoizedChildTwo } from "./ChildTwo";

export const ParentTwo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Rizkika");

  console.log("ParentTwo Render");
  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Count - {count}
      </button>
      <button onClick={() => setName("Zakka")}>Change Name</button>
      <MemoizedChildTwo name={name} />
    </div>
  );
};
