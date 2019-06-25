import React from "react";
import { connect } from "react-redux";
import { fetchTodos, deleteTodo, updateTodo } from "./../../state/actions";
import Todo from "./Todo";
import styled from "styled-components";
import { FlexFunc } from "./../../styles/reusables";
import AddTodo from "./AddToDo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

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
  width: 10%;
`;

class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    if (this.props.isFetching) {
      return <div>Loading</div>;
    } else if (!this.props.todos || this.props.todos.length === 0) {
      return <div>You have no active tasks</div>;
    }
    return (
      <TodoListDiv>
        <TitleBar>
          <BarButtonLi> </BarButtonLi>
          <BarPriorityLi>
            <FontAwesomeIcon icon={faPlus} />{" "}
          </BarPriorityLi>
          <BarTodoLi>Todo</BarTodoLi>
          <BarCatergoryLi>Catergory</BarCatergoryLi>
          <BarDateLi>Due Date</BarDateLi>
        </TitleBar>
        <AddTodo
          addTodo={this.props.addTodo}
          catergories={this.props.catergories}
          priorities={this.props.priorities}
        />

        {this.props.todos.map(todo => (
          <Todo key={todo.id} {...todo} deleteTodo={this.props.deleteTodo} />
        ))}
      </TodoListDiv>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { fetchTodos, deleteTodo, updateTodo }
)(TodoList);
