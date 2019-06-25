import React from "react";
import TodoList from "./TodoList";
import SearchBar from "./SearchBar";

import { connect } from "react-redux";
import {
  addTodo,
  filterAll,
  filterCatergory,
  filterDueDate,
  searchStart,
  searchEnd,
  search
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
        isFiltering={props.isFiltering}
        catergories={props.catergories}
        filterAll={props.filterAll}
        filterCatergory={props.filterCatergory}
        filterDueDate={props.filterDueDate}
        searchStart={props.searchStart}
        searchEnd={props.searchEnd}
        search={props.search}
      />
      <TodoSectionContainer>
        <TodoList
          isFiltering={props.isFiltering}
          isFetching={props.isFetching}
          addTodo={props.addTodo}
          catergories={props.catergories}
          priorities={props.priorities}
          filteredTodos={props.filteredTodos}
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
  {
    addTodo,
    filterAll,
    filterCatergory,
    filterDueDate,
    searchStart,
    searchEnd,
    search
  }
)(TodoPage);
