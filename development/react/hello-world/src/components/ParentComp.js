import React, { Component } from "react";
import PureComp from "./PureComp";
import RegComp from "./RegComp";
import MemoComp from "./MemoComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Rizkika",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Rizkika",
      });
    }, 2000);
  }

  render() {
    console.log("Parent Comp render");
    return (
      <div>
        <div>Parent Component</div>
        <MemoComp name={this.state.name}></MemoComp>
        {/* <RegComp name={this.state.name}></RegComp> */}
        {/* <PureComp name={this.state.name}></PureComp> */}
      </div>
    );
  }
}

export default ParentComp;
