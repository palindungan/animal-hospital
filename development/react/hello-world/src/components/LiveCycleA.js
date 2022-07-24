import React, { Component } from "react";
import LiveCycleB from "./LiveCycleB";

class LiveCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };

    console.log("mounting 1. LiveCycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("mounting 2. LiveCycleA static getDerivedStateFromProps");

    return null;
  }

  componentDidMount() {
    console.log("mounting 4. LiveCycleA componentDidMount");
  }

  render() {
    console.log("mounting 3. LiveCycleA Render");

    return (
      <div>
        <div>LiveCycleA</div>
        <LiveCycleB></LiveCycleB>
      </div>
    );
  }
}

export default LiveCycleA;
