import React from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddToDo";
import { connect } from "react-redux";
import { addTodo } from "./../../state/actions";
import styled from "styled-components";
import { FlexFunc } from "./../../styles/reusables";

const TodoPageDiv = styled.div`
  ${FlexFunc("column", "center", "center")}
`;

const TodoSectionContainer = styled.div`
  ${FlexFunc("row", "space-between", "center")};
  width: 100%;
`;

const PageHeader = styled.h1`
position: absolute;
top: 1rem;
left: 1rem;
`

const TodoPage = props => {
  return (
    <TodoPageDiv>
      <PageHeader>Wunderlist</PageHeader>
      <TodoSectionContainer>
        <AddTodo
          addTodo={props.addTodo}
          catergories={props.catergories}
          priorities={props.priorities}
        />
        <TodoList isFetching={props.isFetching} />
      </TodoSectionContainer>
    </TodoPageDiv>
  );
};

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    catergories: state.catergories,
    priorities: state.priorities,
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo }
)(TodoPage);
