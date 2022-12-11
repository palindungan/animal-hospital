import React, { useContext } from "react";
import { CountContext } from "./ContextParent";

export const ChildA = () => {
  console.log("Render ChildA");
  return (
    <>
      <div>ChildA</div>
      <ChildB />
    </>
  );
};

export const MemoizedChildA = React.memo(ChildA);

export const ChildB = () => {
  console.log("Render ChildB");
  return (
    <>
      <div>ChildB</div>
      <ChildC />
    </>
  );
};

export const ChildC = () => {
  const count = useContext(CountContext);

  console.log("Render ChildC");
  return (
    <>
      <div>ChildC count = {count}</div>
    </>
  );
};
