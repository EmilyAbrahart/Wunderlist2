import React from 'react';

class Todo extends React.Component{
    state={
        catergory: '',
        isComplete: false,
    }
    
    render() {
        return (
            <div>
                <div>{this.props.item}</div>
                <div>{this.props.description}</div>
                <div>Due Date: {this.props.due_date}</div>
                <div>Priority: {this.props.priority}</div>
            </div>
        )
    }
    
};

export default Todo;