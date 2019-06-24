import React from "react";

class Todo extends React.Component {
  state = {
    catergory: "",
    isComplete: false
  };

  render() {
    const descArray = JSON.parse(this.props.description);
    return (
      <div>
        <div>{this.props.item}</div>
        {descArray[0] && <div>{descArray[0]}</div>}
        {descArray[1] && <div>Catergory: {descArray[1]}</div>}
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
