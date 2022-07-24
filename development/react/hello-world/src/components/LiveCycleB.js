import React, { Component } from "react";

class LiveCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };

    console.log("mounting 1. LiveCycleB constructor");
  }

  static getDerivedStateFromProps(props, state) {
    // console.log("mounting 2. LiveCycleB static getDerivedStateFromProps");
    console.log("updateing 1. LiveCycleB getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    // console.log("mounting 4. LiveCycleB componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("updateing 2. LiveCycleB shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("updateing 4. LiveCycleB getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("updateing 5. LiveCycleB componentDidUpdate");
  }

  render() {
    console.log("mounting 3. LiveCycleB Render");

    return (
      <div>
        <div>LiveCycleB</div>
      </div>
    );
  }
}

export default LiveCycleB;
