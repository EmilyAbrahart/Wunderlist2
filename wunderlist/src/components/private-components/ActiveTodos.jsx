import React from 'react';
import { connect } from 'react-redux';
import { updateTodo } from '../../state/actions';
import Todo from './Todo';
import styled from 'styled-components';
import { FlexFunc, tablet, color_dark } from '../../styles';

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

const Spinner = styled.div`
position: absolute;
top: 50%;
left: 50%;
.lds-ring {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 51px;
  height: 51px;
  margin: 6px;
  border: 6px solid ${color_dark};
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${color_dark} transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

`
const ActiveTodos = props => {
	return (
		<TodoListDiv isFiltering={props.isFiltering}>
	
			{props.isFetching ? (
				<Spinner>
					<div class="lds-ring">
						<div />
						<div />
						<div />
						<div />
					</div>
				</Spinner>
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
