import React from 'react';
import styled from 'styled-components';
import {
	FlexFunc,
	color_light,
	color_negative,
	color_neutral,
	color_positive,
	color_subtle,
	Button
} from './../../styles/reusables';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTrashAlt,
	faPencilAlt,
	faCheck
} from '@fortawesome/free-solid-svg-icons';
import UpdateTodoForm from './UpdateTodo';
import { connect } from 'react-redux';
import {
	updateTodo,
	filterAll,
	updateDeleted,
	updateCompleted
} from './../../state/actions';

const TodoDiv = styled.div`
	${FlexFunc('row', 'flex-start', 'flex-start')};
	height: auto;
	width: 100%;
	text-align: left;
	position: relative;
`;

const PriorityDiv = styled.div`
	width: 1rem;
	background: ${props =>
		props.priority.toString() === '1'
			? color_negative
			: props.priority.toString() === '2'
			? color_neutral
			: props.priority.toString() === '3'
			? color_positive
			: color_light};
	height: 1.5rem;
`;

const ButtonContainer = styled.div`
	${FlexFunc('row', 'center', 'center')};
	width: 15%;
`;

const TodoButton = styled.button`
	${Button(color_light, color_subtle)};
	border-color: ${color_light};
`;

const ItemDiv = styled.div`
	width: 50%;
	padding-left: 1rem;
	font-weight: bold;
	white-space: ${props => (props.isExpanded ? 'normal' : 'nowrap')};
	text-overflow: ellipsis;
	overflow: hidden;
	padding-bottom: ${props => (props.isExpanded ? '0.5rem' : '0')};
`;

const DescriptionSpan = styled.span`
	padding-left: 1rem;
	font-weight: normal;
	font-size: 0.9rem;
`;

const CatergoryDiv = styled.div`
	width: 15%;
	text-align: center;
`;

const DueDateDiv = styled.div`
	width: 15%;
	text-align: center;
`;

const PriorityContainer = styled.div`
	width: 5%;
	${FlexFunc('column', 'center', 'center')}
`;

class Todo extends React.Component {
	state = {
		isExpanded: false,
		isUpdating: false
	};

	toggleExpansion = () => {
		this.setState({ isExpanded: !this.state.isExpanded });
	};

	toggleUpdate = () => {
		this.props.filterAll();
		this.setState({ isUpdating: !this.state.isUpdating });
	};

	archiveTodo = () => {
		const archivedObj = {
			item: this.props.item,
			description: JSON.stringify([
				...JSON.parse(this.props.description),
				'TASK_DELETED'
			]),
			priority: this.props.priority,
			due_date: moment()
		};
		this.props.updateDeleted(this.props.id, archivedObj);
	};

	completeTodo = () => {
		const completedObj = {
			item: this.props.item,
			description: JSON.stringify([
				...JSON.parse(this.props.description),
				'TASK_COMPLETED'
			]),
			priority: this.props.priority,
			due_date: this.props.due_date
		};
		this.props.updateCompleted(this.props.id, completedObj);
	};

	render() {
		const descArray = JSON.parse(this.props.description);
		return (
			<TodoDiv isUpdating={this.state.isUpdating}>
				<ButtonContainer>
					<TodoButton onClick={() => this.completeTodo()}>
						<FontAwesomeIcon icon={faCheck} />
					</TodoButton>
					<TodoButton onClick={() => this.toggleUpdate()}>
						<FontAwesomeIcon icon={faPencilAlt} />
					</TodoButton>
					<TodoButton onClick={() => this.archiveTodo()}>
						<FontAwesomeIcon icon={faTrashAlt} />
					</TodoButton>
				</ButtonContainer>
				{this.state.isUpdating ? (
					<UpdateTodoForm
						{...this.props}
						toggleUpdate={this.toggleUpdate}
						isUpdating={this.state.isUpdating}
						updateTodo={this.props.updateTodo}
						priorities={this.props.priorities}
					/>
				) : (
					<>
						<PriorityContainer>
							<PriorityDiv priority={this.props.priority} />
						</PriorityContainer>
						<ItemDiv
							isExpanded={this.state.isExpanded}
							isUpdating={this.state.isUpdating}
							onClick={this.toggleExpansion}
						>
							{this.props.item}
							<DescriptionSpan>{descArray[0]}</DescriptionSpan>
						</ItemDiv>
						<CatergoryDiv>{descArray[1]}</CatergoryDiv>
						<DueDateDiv>
							{this.props.due_date
								? moment(this.props.due_date).format('DD MM YYYY')
								: '-'}
						</DueDateDiv>
					</>
				)}
			</TodoDiv>
		);
	}
}

const mapStateToProps = state => {
	return {
		catergories: state.catergories,
		priorities: state.priorities
	};
};

export default connect(
	mapStateToProps,
	{ updateTodo, filterAll, updateDeleted, updateCompleted }
)(Todo);
