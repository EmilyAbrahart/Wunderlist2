import React from "react";
import { connect } from "react-redux";
import { fetchTodos, deleteTodo, updateTodo } from "./../../state/actions";
import Todo from "./Todo";
import styled from "styled-components";
import { FlexFunc } from "./../../styles/reusables";

const TodoListDiv = styled.div`
  ${FlexFunc("column", "center", "flex-start")};
  width: 100%;
`;
const TitleBar = styled.ul`
  ${FlexFunc("row", "flex-start", "baseline")};
  width: 100%;
  height: 1.5rem;
  padding: 0;
  font-weight: bold;

  li {
    list-style-type: none;
  }
`;

const BarPriorityLi = styled.li`
  width: 1rem;
  height: 100%;
`;

const BarTodoLi = styled.li`
  width: 40%;
  border: 2px solid red;
`;

const BarCatergoryLi = styled.li`
  width: 15%;
  border: 2px solid red;
`;

const BarDateLi = styled.li`
  width: 15%;
  border: 2px solid red;
`;

const BarButtonLi = styled.li`
width: 10%;
`

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
          <BarPriorityLi> </BarPriorityLi>
          <BarButtonLi> </BarButtonLi>
          <li> </li>
          <BarTodoLi>Todo</BarTodoLi>
          <BarCatergoryLi>Catergory</BarCatergoryLi>
          <BarDateLi>Due Date</BarDateLi>
        </TitleBar>

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
