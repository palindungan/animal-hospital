import React from "react";

const Hello = () => {
  // using jsx
  return (
    <div id="hello" className="dummy">
      <h1>Hello Rizkika</h1>
    </div>
  );

  //   // without using jsx
  //   return React.createElement(
  //     "div",
  //     { id: "hello", className: "dummy" },
  //     React.createElement("h1", null, "Hello Rizkika")
  //   );
};

export default Hello;
