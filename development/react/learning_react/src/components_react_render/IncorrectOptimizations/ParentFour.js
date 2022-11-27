import React, { useState } from "react";
import { MemoizedChildFive } from "./ChildFive";

export const ParentFour = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Rizkika");

  const person = {
    fName: "AAA",
    lName: "BBB",
  };

  const handleClick = () => {};

  console.log("ParentFour Render");
  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Count - {count}
      </button>
      <button onClick={() => setName("Zakka")}>Change Name</button>
      <MemoizedChildFive
        name={name}
        handleClick={handleClick}
      ></MemoizedChildFive>
    </div>
  );
};
