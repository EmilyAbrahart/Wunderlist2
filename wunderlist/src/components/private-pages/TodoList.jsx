import React from "react";
import { connect } from "react-redux";
import { fetchTodos, deleteTodo, updateTodo } from "./../../state/actions";
import Todo from "./Todo";
import styled from 'styled-components';
import {FlexFunc} from './../../styles/reusables';

const TodoListDiv = styled.div`
${FlexFunc('column', 'center', 'flex-start')};
width: 100%;
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
     }
 };

export default connect(
  mapStateToProps,
  { fetchTodos, deleteTodo, updateTodo }
)(TodoList);
