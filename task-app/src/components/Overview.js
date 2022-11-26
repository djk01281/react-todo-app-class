import React, { Component } from "react";
class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { taskArray } = this.props;

    return (
      <div>
        {taskArray.map((taskObject) => {
          return <div>{taskObject.task}</div>;
        })}
      </div>
    );
  }
}

export default Overview;
