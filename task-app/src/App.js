import "./App.css";
import React, { Component } from "react";
import Overview from "./components/Overview";
class App extends Component {
  constructor() {
    super();
    this.state = {
      taskArray: [],
    };
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }
  addTask(taskObject) {
    this.setState({
      taskArray: [...this.state.taskArray, taskObject],
    });
  }

  deleteTask(idNumber) {
    this.setState({
      taskArray: this.state.taskArray.filter((item) => item.id !== idNumber),
    });
  }

  render() {
    return (
      <div>
        This is App
        <Input addTask={this.addTask} taskArray={this.state.taskArray}></Input>
        <Overview
          deleteTask={this.deleteTask}
          taskArray={this.state.taskArray}
        />
      </div>
    );
  }
}

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "", task: {}, id: 0 };
  }

  render() {
    const { addTask, taskArray } = this.props;
    return (
      <div>
        <div>{this.state.task.taskName}</div>
        <input
          type="text"
          onChange={(e) => {
            this.setState({ text: e.target.value });
          }}
        />
        <button
          onClick={(e) => {
            this.setState({ id: this.state.id + 1 });
            this.setState(
              { task: { taskName: this.state.text, id: this.state.id } },
              () => addTask(this.state.task)
            );
          }}
        >
          +
        </button>
      </div>
    );
  }
}

export default App;
