import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: true,
    };
  }

  render() {
    return this.state.isLogin && <div>Welcome Rizkika</div>;

    // return this.state.isLogin ? (
    //   <div>Welcome Rizkika</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    // let message;
    // if (this.state.isLogin) {
    //   message = <div>Welcome Rizkika</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return <div>{message}</div>;

    // if (this.state.isLogin) {
    //   return (
    //     <div>
    //       <div>Welcome Rizkika</div>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <div>Welcome Guest</div>
    //     </div>
    //   );
    // }
    // return (
    //   <div>
    //     <div>Welcome Rizkika</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
