import "./App.css";
import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      task: { text: "", id: uniqid(), editing: false },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleResubmit = this.handleResubmit.bind(this);
    this.changeEditState = this.changeEditState.bind(this);
  }

  handleChange(e) {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
        editing: this.state.task.editing,
      },
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      tasks: [...this.state.tasks, this.state.task],
      task: {
        text: "",
        id: uniqid(),
        editing: this.state.task.editing,
      },
    });
    document.getElementById("task").value = "";
  }

  handleDelete(e) {
    let objId = e.target.parentElement.id;
    let filter = this.state.tasks.filter((obj) => obj.id !== objId);
    this.setState({
      tasks: filter,
    });
  }

  handleResubmit(e) {
    e.preventDefault();
    let objId = e.target.parentElement.id;
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (objId === task.id) {
          return { text: this.state.task.text, id: objId, editing: false };
        } else {
          return task;
        }
      }),
    });
  }

  changeEditState(e) {
    let id = e.target.parentElement.id;
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (id === task.id) {
          return { ...task, editing: true };
        }
        return task;
      }),
    });
  }

  render() {
    return (
      <div className="container">
        <div className="taskContainer">
        <span className="title">What's the plan for today?</span>
          <form className="form" onSubmit={this.handleSubmit}>
            <input id="task" type="text" onChange={this.handleChange} placeholder="Task.."></input>
            <button type="submit">Add task</button>
          </form>
          <Overview
            taskList={this.state.tasks}
            deleteTask={this.handleDelete}
            isEdited={this.changeEditState}
            handleResubmit={this.handleResubmit}
            handleChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
