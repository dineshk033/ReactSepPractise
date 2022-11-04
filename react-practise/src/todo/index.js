import React from "react";
import YourTodo from "./pending";
import { ContainerTodo } from "./styled";

class Todo extends React.Component {
  state = {
    pending: [{ title: "work1" }, { title: "work2" }, { title: "work3" }],
    completed: [{ title: "work4" }, { title: "work5" }],
  };

  handleComplete = (obj) => {
    const Remove = this.state.pending.filter((el) => el.title != obj.title);
    const ADD = [...this.state.completed, obj];
    console.log(Remove, ADD, obj);
    this.setState({
      pending: Remove,
      completed: ADD,
    });
  };

  render() {
    return (
      <ContainerTodo>
        <h4>Todo App</h4>
        <YourTodo
          list={this.state.pending}
          handleComplete={this.handleComplete}
        />
      </ContainerTodo>
    );
  }
}

export default Todo;
