import "./App.css";
import React, { Component } from "react";
import Overview from "./components/Overview";
class App extends Component {
  constructor() {
    super();
    this.state = {
      taskArray: [{ task: "sth", id: 1 }],
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
      taskArray: this.taskArray.filter((item) => item.id !== idNumber),
    });
  }

  render() {
    return (
      <div>
        This is App
        <Input addTask={this.addTask}></Input>
        <Overview taskArray={this.state.taskArray} />
      </div>
    );
  }
}

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "", task: {} };
  }

  render() {
    const { addTask } = this.props;
    return (
      <div>
        <div>{this.state.task.task}</div>
        <input
          type="text"
          onChange={(e) => {
            this.setState({ text: e.target.value });
          }}
        />
        <button
          onClick={(e) => {
            this.setState({ task: { task: this.state.text, id: 0 } });
            addTask(this.state.task);
          }}
        >
          +
        </button>
      </div>
    );
  }
}

export default App;
