import React from "react";

function MemoComp({ name }) {
  console.log("Rendering Memo Comp");
  return (
    <div>
      <div>{name}</div>
    </div>
  );
}

export default React.memo(MemoComp);
