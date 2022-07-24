import React, { Component } from "react";

class LiveCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };

    console.log("1. LiveCycleB constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("2. LiveCycleB static getDerivedStateFromProps");

    return null;
  }

  componentDidMount() {
    console.log("4. LiveCycleB componentDidMount");
  }

  render() {
    console.log("3. LiveCycleB Render");

    return (
      <div>
        <div>LiveCycleB</div>
      </div>
    );
  }
}

export default LiveCycleB;
