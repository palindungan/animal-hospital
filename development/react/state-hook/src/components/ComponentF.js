import React from "react";
import { UserContent, ChannelContext } from "../App";

function ComponentF() {
  return (
    <div>
      <div>
        <UserContent.Consumer>
          {(user) => {
            return (
              <ChannelContext.Consumer>
                {(channel) => {
                  return (
                    <div>
                      user content is {user}, {channel}
                    </div>
                  );
                }}
              </ChannelContext.Consumer>
            );
          }}
        </UserContent.Consumer>
      </div>
    </div>
  );
}

export default ComponentF;
