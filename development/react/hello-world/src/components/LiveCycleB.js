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
    console.log("mounting 2. LiveCycleB static getDerivedStateFromProps");

    return null;
  }

  componentDidMount() {
    console.log("mounting 4. LiveCycleB componentDidMount");
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
