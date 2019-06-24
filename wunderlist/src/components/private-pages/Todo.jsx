import React from "react";

class Todo extends React.Component {
  state = {
    catergory: "",
    isComplete: false
  };

  render() {
    return (
      <div>
        <div>{this.props.item}</div>
        <div>{this.props.description}</div>
        {this.props.due_date && <div>Due Date: {this.props.due_date}</div>}
        {this.props.priority && <div>Priority: {this.props.priority}</div>}
        <button onClick={() => this.props.deleteTodo(this.props.id)}>
          Delete
        </button>
      </div>
    );
  }
}

export default Todo;
