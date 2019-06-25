import React from "react";
import styled from "styled-components";
import { FlexFunc } from "./../../styles/reusables";

const TodoDiv = styled.div`
  ${FlexFunc("row", "center", "center")};
`;

class Todo extends React.Component {
  state = {
    isComplete: false
  };

  completeTask = () => {
    this.setState({ isComplete: true });
  };

  render() {
    const descArray = JSON.parse(this.props.description);
    return (
      <TodoDiv>
        <div>{this.props.item}</div>
        {descArray[0] && <div>{descArray[0]}</div>}
        {descArray[1] && <div>Catergory: {descArray[1]}</div>}
        {this.props.due_date && <div>Due Date: {this.props.due_date}</div>}
        {this.props.priority && <div>Priority: {this.props.priority}</div>}
        <button onClick={() => this.props.deleteTodo(this.props.id)}>
          Delete
        </button>
        <button onClick={() => this.completeTask()}>Complete</button>
      </TodoDiv>
    );
  }
}

export default Todo;
