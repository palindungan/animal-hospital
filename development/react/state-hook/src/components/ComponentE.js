import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import { UserContent, ChannelContext } from "../App";

function ComponentE() {
  const user = useContext(UserContent);
  const channel = useContext(ChannelContext);

  return (
    <div>
      {user} - {channel}
      {/* <ComponentF></ComponentF> */}
    </div>
  );
}

export default ComponentE;
