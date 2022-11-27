import React, { useState } from "react";
import { MemoizedChildThree } from "./ChildThree";

export const ParentThree = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Rizkika");

  console.log("ParentThree Render");
  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Count - {count}
      </button>
      <button onClick={() => setName("Zakka")}>Change Name</button>
      <MemoizedChildThree name={name}>
        <strong>Hello</strong>
      </MemoizedChildThree>
    </div>
  );
};
