import React from "react";
import styled from "styled-components";
import {
  FlexFunc,
  color_light,
  color_negative,
  color_neutral,
  color_positive
} from "./../../styles/reusables";

const TodoDiv = styled.div`
  ${FlexFunc("row", "center", "center")};
  height: 2.5rem;
`;

const PriorityDiv = styled.div`
  width: 1rem;
  background: ${props =>
    props.priority === 1
      ? color_negative
      : props.priority === 2
      ? color_neutral
      : props.priority === 3
      ? color_positive
      : color_light};
  height: 1.5rem;
`;

const ButtonContainer = styled.div`
  ${FlexFunc("row", "center", "center")};
  display: ${props => (props.openMenu ? 'flex' : 'none')};
`;

class Todo extends React.Component {
  state = {
    isComplete: false,
    openMenu: false
  };

  toggleMenu = () => {
    this.setState({ openMenu: !this.state.openMenu });
  };

  completeTask = () => {
    this.setState({ isComplete: true });
  };

  render() {
    const descArray = JSON.parse(this.props.description);
    return (
      <TodoDiv>
        <PriorityDiv onClick={() => this.toggleMenu()} priority={this.props.priority} />
        <ButtonContainer
          openMenu={this.state.openMenu}
        >
          <button onClick={() => this.completeTask()}>Complete</button>
          <button>Edit</button>
          <button onClick={() => this.props.deleteTodo(this.props.id)}>
            Delete
          </button>
        </ButtonContainer>

        <div>{this.props.item}</div>
        {descArray[0] && <div>{descArray[0]}</div>}
        {descArray[1] && <div>Catergory: {descArray[1]}</div>}
        {this.props.due_date && <div>Due Date: {this.props.due_date}</div>}
      </TodoDiv>
    );
  }
}

export default Todo;
