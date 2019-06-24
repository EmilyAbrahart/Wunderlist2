import React from "react";
import { connect } from "react-redux";
import { fetchTodos, deleteTodo, updateTodo } from "./../../state/actions";
import Todo from "./Todo";

class TodoList extends React.Component {
    componentDidMount(){
        this.props.fetchTodos();
    }

  render() {
    return (<div>
        {this.props.todos.map(todo => <Todo key={todo.id} {...todo} />)}
    </div>);
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchTodos, deleteTodo, updateTodo }
)(TodoList);
