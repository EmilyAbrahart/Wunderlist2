import React from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddToDo";
import { connect } from "react-redux";
import { addTodo } from "./../../state/actions";

const TodoPage = props => {
  return (
    <div>
      <h1>Wunderlist</h1>
      <AddTodo
        addTodo={props.addTodo}
        catergories={props.catergories}
        priorities={props.priorities}
      />
      <TodoList isFetching={props.isFetching} />
    </div>
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
