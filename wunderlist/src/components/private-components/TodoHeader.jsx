import React from 'react';
import styled from 'styled-components';
import { FlexFunc, Button } from '../../styles';
import AddTodo from './AddToDo';
import { connect } from 'react-redux';
import {toggleForm} from './../../state/actions';

const TodoHeaderContainer = styled.div`
${FlexFunc('column', 'center', 'center')};
width: 100%;
max-width: 1024px;
padding-top: 2rem;
`

const TitleBar = styled.ul`
	${FlexFunc('row', 'flex-start', 'baseline')};
	width: 100%;
	height: 1.5rem;
	padding: 0;
	font-weight: bold;

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

const AddTodoButton = styled.button`
	${Button('white', 'black')}
`;

const TodoHeader = (props) => {
	return (
		<TodoHeaderContainer>
			<TitleBar>
				<BarButtonLi>
					<AddTodoButton onClick={() => props.toggleForm()}>
						{props.isAdding ? 'Close' : 'Add Todo'}
					</AddTodoButton>
				</BarButtonLi>
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
  }
}
export default connect(mapStateToProps,{toggleForm})(TodoHeader);
