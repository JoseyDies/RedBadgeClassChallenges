import React, { Component } from "react";
import { Input, Button, Container, ListGroup, ListGroupItem } from "reactstrap";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unfinishedTask: "",
      tasks: [],
    };
  }

  onChange = (event) => {
    this.setState({ unfinishedTask: event.target.value });
  };

  onSubmit = (event) => {
    let taskArray = this.state.tasks;
    taskArray.push(this.state.unfinishedTask);
    this.setState({
      unfinishedTask: "",
      tasks: taskArray,
    });
  };

  displayTasks = () => {
    return this.state.tasks.map((task, index) => (
      <ListGroup key={index}>
        <Input
          type="checkbox"
          value={task}
          onChange={this.onChange}
          onClick={(e) => this.removeTask(e, index)}
          placeholder=""
     
        />
        <ListGroupItem>{task}</ListGroupItem>
      </ListGroup>
    ));
  };

  removeTask = (event, index) => {
    let list = this.state.tasks;
    list.splice(index, 1);
    this.setState({
      tasks: list,
    });
  };

  render() {
    return (
      <div>
        <Input placeholder="Add Task" onChange={this.onChange} />
        <br />
        <br />
        <Button onClick={(e) => this.onSubmit(e)}>Add</Button>
        <div>
          <Container>{this.displayTasks()}</Container>
        </div>
      </div>
    );
  }
}

export default ToDoList;