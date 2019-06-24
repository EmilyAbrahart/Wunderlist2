import React from "react";
import { connect } from "react-redux";
import { fetchTodos, deleteTodo, updateTodo } from "./../../state/actions";
import Todo from "./Todo";

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
      <div>
        {this.props.todos.map(todo => (
          <Todo key={todo.id} {...todo} deleteTodo={this.props.deleteTodo} />
        ))}
      </div>
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
