import React, { PureComponent } from "react";

export class PureComp extends PureComponent {
  render() {
    console.log("Pure Comp render");
    return (
      <div>
        <div>Pure Component {this.props.name}</div>
      </div>
    );
  }
}

export default PureComp;
