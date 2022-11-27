import React from "react";

export const ChildTwo = () => {
  console.log("ChildTwo Render");
  return (
    <div>
      <div>ChildTwo Component</div>
    </div>
  );
};

export const MemoizedChildTwo = React.memo(ChildTwo);
