import React from "react";
import TodoList from "./TodoList";
import SearchBar from "./SearchBar";

import { connect } from "react-redux";
import {
  addTodo,
  filterMonth,
  filterToday,
  filterWeek
} from "./../../state/actions";
import styled from "styled-components";
import { FlexFunc } from "./../../styles/reusables";

const TodoPageDiv = styled.div`
  ${FlexFunc("column", "center", "center")}
  margin: 0 aut0;
`;

const TodoSectionContainer = styled.div`
  ${FlexFunc("row", "space-between", "center")};
  width: 100%;
`;

const PageHeader = styled.h1`
  position: absolute;
  top: 1rem;
  left: 1rem;
`;

const TodoPage = props => {
  return (
    <TodoPageDiv>
      <PageHeader>Wunderlist</PageHeader>
      <SearchBar
        catergories={props.catergories}
        filterToday={props.filterToday}
        filterWeek={props.filterWeek}
      />
      <TodoSectionContainer>
        <TodoList
          isFiltering={props.isFiltering}
          isFetching={props.isFetching}
          addTodo={props.addTodo}
          catergories={props.catergories}
          priorities={props.priorities}
        />
      </TodoSectionContainer>
    </TodoPageDiv>
  );
};

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    catergories: state.catergories,
    priorities: state.priorities,
    todos: state.todos,
    isFiltering: state.isFiltering,
    filteredTodos: state.filteredTodos
  };
};

export default connect(
  mapStateToProps,
  { addTodo, filterToday, filterWeek, filterMonth }
)(TodoPage);
