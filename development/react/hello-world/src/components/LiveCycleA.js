import React, { Component } from "react";
import LiveCycleB from "./LiveCycleB";

class LiveCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };

    console.log("1. LiveCycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("2. LiveCycleA static getDerivedStateFromProps");

    return null;
  }

  componentDidMount() {
    console.log("4. LiveCycleA componentDidMount");
  }

  render() {
    console.log("3. LiveCycleA Render");

    return (
      <div>
        <div>LiveCycleA</div>
        <LiveCycleB></LiveCycleB>
      </div>
    );
  }
}

export default LiveCycleA;
