import React, { Component } from "react";
class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { deleteTask, taskArray } = this.props;

    return (
      <div>
        {taskArray.map((taskObject) => {
          return (
            <div>
              <span>{taskObject.task}</span>
              <button onClick={() => deleteTask(taskObject.id)}>-</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Overview;
