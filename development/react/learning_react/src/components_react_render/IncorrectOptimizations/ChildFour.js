import React from "react";

export const ChildFour = ({ name }) => {
  const date = new Date();

  console.log("ChildFour Render");
  return (
    <div>
      <div>Hello {name}</div>
      <div>
        Sekarang {date.getHours()} : {date.getMinutes()} : {date.getSeconds()}
      </div>
    </div>
  );
};

export const MemoizedChildFour = React.memo(ChildFour);
