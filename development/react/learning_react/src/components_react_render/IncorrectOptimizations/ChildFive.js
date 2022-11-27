import React from "react";

export const ChildFive = ({ name }) => {
  console.log("ChildFive Render");
  return (
    <div>
      <div>Hello {name}</div>
    </div>
  );
};

export const MemoizedChildFive = React.memo(ChildFive);
