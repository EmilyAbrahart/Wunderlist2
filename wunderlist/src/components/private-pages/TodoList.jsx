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
  li {
    list-style-type: none;
  }
`;

const BarPriorityLi = styled.li`
width: 1rem;
height: 100%;
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
          <BarPriorityLi> </BarPriorityLi>
          <li> </li>
          <li>Todo</li>
          <li>Catergory</li>
          <li>Due Date</li>
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
