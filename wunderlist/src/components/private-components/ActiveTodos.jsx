import React from 'react';
import { connect } from 'react-redux';
import { updateTodo } from '../../state/actions';
import Todo from './Todo';
import styled from 'styled-components';
import { FlexFunc } from '../../styles';

const TodoListDiv = styled.div`
	${FlexFunc('column', 'center', 'flex-start')};
	display: ${props => (props.isFiltering ? 'none' : 'flex')};
	width: 100%;
	max-width: 1024px;
	margin: 0 auto;
	box-sizing: border-box;
`;

const ActiveTodos = props => {
	return (
		<TodoListDiv isFiltering={props.isFiltering}>
			{props.isFetching ? (
				<div>Loading</div>
			) : !props.todos || props.todos.length === 0 ? (
				<div>You have no active tasks</div>
			) : (
				props.activeTodos.map((todo, index) => (
					<Todo key={todo.id} {...todo} todoIndex={index} />
				))
			)}
		</TodoListDiv>
	);
};

const mapStateToProps = state => {
	return {
		todos: state.todos,
		activeTodos: state.activeTodos,
		isAdding: state.isAdding,
		isFetching: state.isFetching,
		isFiltering: state.isFiltering
	};
};

export default connect(
	mapStateToProps,
	{ updateTodo }
)(ActiveTodos);
