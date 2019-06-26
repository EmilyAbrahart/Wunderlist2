import React from "react";
import { connect } from "react-redux";
import {
  fetchTodos,
  deleteTodo,
  updateTodo,
  toggleForm
} from "./../../state/actions";
import Todo from "./Todo";
import styled from "styled-components";
import { FlexFunc, Button } from "./../../styles/reusables";
import AddTodo from "./AddToDo";

const TodoListDiv = styled.div`
  ${FlexFunc("column", "center", "flex-start")};
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding-top: 4rem;
  box-sizing: border-box;
`;
const TitleBar = styled.ul`
  ${FlexFunc("row", "flex-start", "baseline")};
  width: 100%;
  height: 1.5rem;
  padding: 0;
  font-weight: bold;

  li {
    list-style-type: none;
    height: 1.5rem;
  }
`;

const BarPriorityLi = styled.li`
  width: 5%;
  height: 100%;
`;

const BarTodoLi = styled.li`
  width: 50%;
`;

const BarCatergoryLi = styled.li`
  width: 15%;
`;

const BarDateLi = styled.li`
  width: 15%;
`;

const BarButtonLi = styled.li`
  width: 15%;
`;

const AddTodoButton = styled.button`
  ${Button("white", "black")}
`;

class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <TodoListDiv>
        <TitleBar>
          <BarButtonLi>
            <AddTodoButton onClick={() => this.props.toggleForm()}>
              {this.props.isAdding ? "Close" : "Add Todo"}
            </AddTodoButton>
          </BarButtonLi>
          <BarPriorityLi>!</BarPriorityLi>
          <BarTodoLi>Todo</BarTodoLi>
          <BarCatergoryLi>Catergory</BarCatergoryLi>
          <BarDateLi>Due Date</BarDateLi>
        </TitleBar>
        <AddTodo
          addTodo={this.props.addTodo}
          catergories={this.props.catergories}
          priorities={this.props.priorities}
          isAdding={this.props.isAdding}
        />
        {this.props.isFetching ? (
          <div>Loading</div>
        ) : !this.props.todos || this.props.todos.length === 0 ? (
          <div>You have no active tasks</div>
        ) : this.props.isFiltering ? (
          this.props.filteredTodos.map(todo => (
            <Todo key={todo.id} {...todo} deleteTodo={this.props.deleteTodo} />
          ))
        ) : (
          this.props.todos.map((todo, index) => (
            <Todo
              key={todo.id}
              {...todo}
              todoIndex={index}
              updateTodo={this.props.updateTodo}
              deleteTodo={this.props.deleteTodo}
              catergories={this.props.catergories}
              priorities={this.props.priorities}
            />
          ))
        )}
      </TodoListDiv>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state.todos,
    isAdding: state.isAdding
  };
};

export default connect(
  mapStateToProps,
  { fetchTodos, deleteTodo, updateTodo, toggleForm }
)(TodoList);
