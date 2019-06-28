import React from 'react';
import styled from 'styled-components';
import { FlexFunc, color_subtle, tablet, mobile } from '../../styles';
import AddTodo from './AddToDo';
import { connect } from 'react-redux';

const TodoHeaderContainer = styled.div`
	${FlexFunc('column', 'center', 'center')};
	width: 100%;
	max-width: 1024px;
	padding-top: 2rem;
`;

const TitleBar = styled.ul`
	${FlexFunc('row', 'flex-start', 'baseline')};
	width: 100%;
	height: 1.5rem;
	padding: 0;
	font-weight: bold;
	background: ${color_subtle};
	height: 2rem;
	font-size: 1rem;

	@media ${tablet} {
		display: none;
	}

	li {
		list-style-type: none;
		height: 1.5rem;
	}
`;

const BarPriorityLi = styled.li`
	width: 5%;
	height: 100%;
`;

const BarTodoLi = styled.li`
	width: 50%;
`;

const BarCatergoryLi = styled.li`
	width: 15%;
`;

const BarDateLi = styled.li`
	width: 15%;
`;

const BarButtonLi = styled.li`
	width: 15%;
`;

const TodoHeader = () => {
	return (
		<TodoHeaderContainer>
			<TitleBar>
				<BarButtonLi />
				<BarPriorityLi>!</BarPriorityLi>
				<BarTodoLi>Todo</BarTodoLi>
				<BarCatergoryLi>Catergory</BarCatergoryLi>
				<BarDateLi>Due Date</BarDateLi>
			</TitleBar>
			<AddTodo />
		</TodoHeaderContainer>
	);
};

const mapStateToProps = state => {
	return {
		isAdding: state.isAdding
	};
};
export default connect(mapStateToProps)(TodoHeader);
