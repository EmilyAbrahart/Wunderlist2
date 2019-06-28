import React from 'react';
import ActiveTodos from '../components/private-components/ActiveTodos';
import CompletedTodos from '../components/private-components/CompletedTodos';
import SearchBar from '../components/private-components/SearchBar';
import DeletedTodos from '../components/private-components/DeletedTodos';
import PrivateRoute from '../authentication/PrivateRoute';
import TodoHeader from '../components/private-components/TodoHeader';
import NavBar from '../components/private-components/Nav';
import FilteredTodos from '../components/private-components/FilteredTodos';
import { connect } from 'react-redux';
import { fetchTodos, deleteTodo } from '../state/actions';
import styled from 'styled-components';
import { FlexFunc, color_light, title_font, color_primary, tablet } from '../styles';
import moment from 'moment';

const TodoPageDiv = styled.div`
	${FlexFunc('row', 'flex-start', 'center')};
	margin: 0 auto;
	width: 100%;
	@media ${tablet} {
		${FlexFunc('column', 'center', 'center')}
	}
`;

const PageHeader = styled.div`
	${FlexFunc('column', 'center', 'center')};
	width: 20%;
	height: 100vh;
	background: ${color_primary};

	@media ${tablet} {
		width: 100%;
		height: auto;
	}
`;

const PageHeading = styled.h1`
	padding: 2rem;
	color: ${color_light};
	font-family: ${title_font};
	font-size: 3rem;

	@media ${tablet} {
		padding: 0;
	}
`;

const TodoSectionContainer = styled.div`
	${FlexFunc('row', 'space-between', 'center')};
	width: 100%;
`;

const TodoContentContainer =styled.div`
	${FlexFunc('column', 'flex-start', 'center')};
	width: 100%;
	height: 100vh;
	overflow-y: scroll;
`

class TodoPage extends React.Component {
	deleteTaskScheduler = () => {
		console.log('Checking archived tasks...');
		for (const task of this.props.deletedTodos) {
			if (moment().isAfter(moment(task.due_date).add(7, 'd'))) {
				this.props.deleteTodo(task.id);
			}
		}
	};

	recurringTaskScheduler = () => {
		console.log('Checking recurring tasks...');
		for (const task of this.props.recurringTodos) {
			const taskCreated = JSON.parse(task.description)[2].created;
			const recurringInterval = parseInt(
				JSON.parse(task.description)[2].interval,
				10
			);

			if (moment().isAfter(moment(taskCreated).add(recurringInterval, 'd'))) {
				this.props.addTodo(task);
			}
		}
	};

	componentDidMount() {
		this.props.fetchTodos();
		setInterval(this.deleteTaskScheduler, 120000);
		setInterval(this.recurringTaskScheduler, 120000);
	}

	render() {
		return (
			<TodoPageDiv>
				<PageHeader>
					<PageHeading>Wunderlist</PageHeading>
					<NavBar />
				</PageHeader>

				<TodoContentContainer>
					<SearchBar />
					<TodoHeader />
					<TodoSectionContainer>
						<FilteredTodos />
						<PrivateRoute path="/completed" component={CompletedTodos} />
						<PrivateRoute path="/deleted" component={DeletedTodos} />
						<PrivateRoute exact path="/" component={ActiveTodos} />{' '}
					</TodoSectionContainer>
				</TodoContentContainer>
			</TodoPageDiv>
		);
	}
}

const mapStateToProps = state => {
	return {
		todos: state.todos,
		recurringTodos: state.recurringTodos,
		deletedTodos: state.deletedTodos
	};
};

export default connect(
	mapStateToProps,
	{ fetchTodos, deleteTodo }
)(TodoPage);
