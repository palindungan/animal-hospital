import React, { Component } from "react";

class RegComp extends Component {
  render() {
    console.log("Reg Comp render");

    return (
      <div>
        <div>Regular Component {this.props.name}</div>
      </div>
    );
  }
}

export default RegComp;
