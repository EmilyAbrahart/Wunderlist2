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
import { fetchTodos } from '../state/actions';
import styled from 'styled-components';
import { FlexFunc } from '../styles/reusables';

const TodoPageDiv = styled.div`
	${FlexFunc('column', 'center', 'center')}
	margin: 0 auto;
	width: 100%;
`;

const PageHeader = styled.h1`
	position: absolute;
	top: 0rem;
	left: 1rem;
`;

const TodoSectionContainer = styled.div`
	${FlexFunc('row', 'space-between', 'center')};
	width: 100%;
`;

class TodoPage extends React.Component {
	componentDidMount() {
		this.props.fetchTodos();
	}

	render() {
		return (
			<TodoPageDiv>
				<PageHeader>Wunderlist</PageHeader>
				<NavBar />
				<SearchBar />
				<TodoHeader />
				<TodoSectionContainer>
					<FilteredTodos />
					<PrivateRoute path="/completed" component={CompletedTodos} />
					<PrivateRoute path="/deleted" component={DeletedTodos} />
					<PrivateRoute exact path="/" component={ActiveTodos} />
				</TodoSectionContainer>
			</TodoPageDiv>
		);
	}
}

const mapStateToProps = state => {
	return {
		todos: state.todos
	};
};

export default connect(
	mapStateToProps,
	{ fetchTodos }
)(TodoPage);
