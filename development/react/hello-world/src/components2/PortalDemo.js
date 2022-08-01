import React from "react";
import ReactDOM from "react-dom";

function PortalDemo() {
  return ReactDOM.createPortal(
    <div>
      <div>portal demo</div>
    </div>,
    document.getElementById("portal-root")
  );
}

export default PortalDemo;
