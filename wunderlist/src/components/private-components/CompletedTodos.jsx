import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import styled from 'styled-components';
import { FlexFunc, tablet } from '../../styles';

const TodoListDiv = styled.div`
	${FlexFunc('column', 'center', 'flex-start')};
	display: ${props => (props.isFiltering ? 'none' : 'flex')};
	width: 100%;
	max-width: 1024px;
	margin: 0 auto;
	box-sizing: border-box;

	@media ${tablet} {
		${FlexFunc('row', 'center', 'center')};
		flex-wrap: wrap;
	}
`;

const CompletedTodos = props => {
	return (
		<TodoListDiv isFiltering={props.isFiltering}>
			{props.completedTodos.map((todo, index) => (
				<Todo key={todo.id} {...todo} todoIndex={index} />
			))}
		</TodoListDiv>
	);
};

const mapStateToProps = state => {
	return {
		completedTodos: state.completedTodos,
		isFiltering: state.isFiltering
	};
};

export default connect(mapStateToProps)(CompletedTodos);
