import React, { useState } from "react";
import { ChildA } from "./ContextChildren";

export const CountContext = React.createContext();
const CountProvider = CountContext.Provider;

export const ContextParent = () => {
  const [count, setCount] = useState(0);

  console.log("Render ContextParent");
  return (
    <>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Count : {count}
      </button>
      <CountProvider value={count}>
        <ChildA />
      </CountProvider>
    </>
  );
};
