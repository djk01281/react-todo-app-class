import React, { Component } from "react";
class Overview extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        This is Overview<div>{this.props.task}</div>
      </div>
    );
  }
}

export default Overview;
