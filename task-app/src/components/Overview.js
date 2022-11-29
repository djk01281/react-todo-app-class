import React, { Component } from "react";
class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = { edit: false };
  }

  render() {
    const { deleteTask, editTask, taskArray } = this.props;
    return (
      <div>
        {taskArray.map((taskObject) => {
          return (
            <div>
              <span>{taskObject.taskName}</span>
              <button onClick={() => deleteTask(taskObject.id)}>-</button>
              <button onClick={() => this.setState({ edit: taskObject.id })}>
                Edit
              </button>

              {this.state.edit !== taskObject.id ? null : <div>Edit Here</div>}
            </div>
          );
        })}
      </div>
    );
  }
}
export default Overview;
