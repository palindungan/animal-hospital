import React, { useState, useEffect } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("log mouse position");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("use effect created");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("unmount function");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      X - {x}, y - {y}
    </div>
  );
}

export default HookMouse;
