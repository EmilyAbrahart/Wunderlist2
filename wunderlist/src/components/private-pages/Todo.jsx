import React from "react";
import styled from "styled-components";
import {
  FlexFunc,
  color_light,
  color_negative,
  color_neutral,
  color_positive
} from "./../../styles/reusables";
import moment from "moment";

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
  display: ${props => (props.openMenu ? "flex" : "none")};
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
        <PriorityDiv
          onClick={() => this.toggleMenu()}
          priority={this.props.priority}
        />
        <ButtonContainer openMenu={this.state.openMenu}>
          <button onClick={() => this.completeTask()}>Complete</button>
          <button>Edit</button>
          <button onClick={() => this.props.deleteTodo(this.props.id)}>
            Delete
          </button>
        </ButtonContainer>

        <div>{this.props.item}</div>
        <div>{descArray[0]}</div>
        <div>{descArray[1]}</div>
        <div>
          {this.props.due_date
            ? moment(this.props.due_date).format("DD MM YYYY")
            : " "}
        </div>
      </TodoDiv>
    );
  }
}

export default Todo;
