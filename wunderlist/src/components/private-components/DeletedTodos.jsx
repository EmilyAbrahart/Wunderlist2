import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import styled from 'styled-components';
import { FlexFunc } from '../../styles/reusables';

const TodoListDiv = styled.div`
	${FlexFunc('column', 'center', 'flex-start')};
	display: ${props => (props.isFiltering ? 'none' : 'flex')};
	width: 100%;
	max-width: 1024px;
	margin: 0 auto;
	box-sizing: border-box;
`;

const DeletedTodos = props => {
	return (
		<TodoListDiv isFiltering={props.isFiltering}>
			{props.deletedTodos.map((todo, index) => (
				<Todo key={todo.id} {...todo} todoIndex={index} />
			))}
		</TodoListDiv>
	);
};

const mapStateToProps = state => {
	return {
		deletedTodos: state.deletedTodos
	};
};

export default connect(mapStateToProps)(DeletedTodos);
