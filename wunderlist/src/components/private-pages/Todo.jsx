import React from "react";
import styled from "styled-components";
import {
  FlexFunc,
  color_light,
  color_negative,
  color_neutral,
  color_positive,
  Button
} from "./../../styles/reusables";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faPencilAlt,
  faCheck
} from "@fortawesome/free-solid-svg-icons";

const TodoDiv = styled.div`
  ${FlexFunc("row", "flex-start", "flex-start")};
  height: auto;
  width: 100%;
  text-align: left;
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
  width: 15%;
`;

const TodoButton = styled.button`
${Button('white', 'black')};
border: none;
`;

const ItemDiv = styled.div`
  width: 50%;
  padding-left: 1rem;
  font-weight: bold;
  white-space: ${props => (props.isExpanded ? "normal" : "nowrap")};
  text-overflow: ellipsis;
  overflow: hidden;
  padding-bottom: ${props => (props.isExpanded ? "0.5rem" : "0")};
`;

const DescriptionSpan = styled.span`
  padding-left: 1rem;
  font-weight: normal;
  font-size: 0.9rem;
`;

const CatergoryDiv = styled.div`
  width: 15%;
  text-align: center;
`;

const DueDateDiv = styled.div`
  width: 15%;
  text-align: center;
`;

const PriorityContainer = styled.div`
width: 5%;
${FlexFunc('column', 'center', 'center')}
`;

class Todo extends React.Component {
  state = {
    isComplete: false,
    isExpanded: false
  };

  toggleExpansion = () => {
    this.setState({ isExpanded: !this.state.isExpanded });
  };

  completeTask = () => {
    this.setState({ isComplete: true });
  };

  render() {
    const descArray = JSON.parse(this.props.description);
    return (
      <TodoDiv onClick={this.toggleExpansion}>
        <ButtonContainer>
          <TodoButton onClick={() => this.completeTask()}>
            <FontAwesomeIcon icon={faCheck} />
          </TodoButton>
          <TodoButton>
            <FontAwesomeIcon icon={faPencilAlt} />
          </TodoButton>
          <TodoButton onClick={() => this.props.deleteTodo(this.props.id)}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </TodoButton>
        </ButtonContainer>
        <PriorityContainer>
          <PriorityDiv priority={this.props.priority} />
        </PriorityContainer>

        <ItemDiv isExpanded={this.state.isExpanded}>
          {this.props.item}
          <DescriptionSpan>{descArray[0]}</DescriptionSpan>
        </ItemDiv>
        <CatergoryDiv>{descArray[1]}</CatergoryDiv>
        <DueDateDiv>
          {this.props.due_date
            ? moment(this.props.due_date).format("DD MM YYYY")
            : "-"}
        </DueDateDiv>
      </TodoDiv>
    );
  }
}

export default Todo;
