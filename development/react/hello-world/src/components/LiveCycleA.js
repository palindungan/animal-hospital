import React, { Component } from "react";
import LiveCycleB from "./LiveCycleB";

class LiveCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "Hoho",
    };

    // console.log("mounting 1. LiveCycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    // console.log("mounting 2. LiveCycleA static getDerivedStateFromProps");
    console.log("updateing 1. LiveCycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    // console.log("mounting 4. LiveCycleA componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("updateing 2. LiveCycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("updateing 4. LiveCycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("updateing 5. LiveCycleA componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      username: "Hehe",
    });
  };

  render() {
    // console.log("mounting 3. LiveCycleA Render");
    console.log("updateing 3. LiveCycleA Render");

    return (
      <div>
        <div>LiveCycleA</div>
        <button onClick={this.changeState}>Change State</button>
        <LiveCycleB></LiveCycleB>
      </div>
    );
  }
}

export default LiveCycleA;
