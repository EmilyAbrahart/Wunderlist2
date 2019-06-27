import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { FlexFunc, Input, Button } from './../../styles/reusables';
import moment from 'moment';
import { addTodo } from './../../state/actions';
import { connect } from 'react-redux';

const AddFormDiv = styled.div`
	width: 100%;
	${FlexFunc('column', 'center', 'flex-start')};
	display: ${props => (props.isAdding ? 'flex' : 'none')};

	margin-bottom: 1rem;

	form {
		width: 100%;
		${FlexFunc('row', 'flex-start', 'flex-start')}

		div {
			${FlexFunc('row', 'center', 'center')};
			height: 1.5rem;
		}
	}
`;

const FormButtonContainer = styled.div`
	width: 15%;
`;

const FormButton = styled.button`
	${Button('white', 'black')};
`;
const FormPriorityContainer = styled.div`
	width: 5%;
	select {
		${Input('95%')}
	}
`;

const FormInfoContainer = styled.div`
	width: 50%;

	input {
		${Input('45%')};
		margin: 0 0.5rem;
	}
`;

const FormCatergoryContainer = styled.div`
	width: 15%;
	select {
		${Input('95%')}
	}
`;

const FormDateContainer = styled.div`
	width: 15%;
	input {
		${Input('95%')}
	}
`;

const AddTodoForm = props => {
	const { values } = props;
	return (
		<AddFormDiv isAdding={props.isAdding}>
			<Form>
				<FormButtonContainer>
					<FormButton type="submit">Add</FormButton>
					<FormButton type="reset">Clear</FormButton>
						<div>
					<Field type="checkbox" name="recurring" checked={values.recurring}/>
				</div>
				</FormButtonContainer>
				<FormPriorityContainer>
					<Field component="select" name="priority" value={values.priority}>
						{props.priorities.map(priority => (
							<option key={priority} name={priority}>
								{priority}
							</option>
						))}
					</Field>
				</FormPriorityContainer>
				<FormInfoContainer>
					<Field type="text" name="item" placeholder="Title" />
					<Field type="text" name="description" placeholder="Description" />
				</FormInfoContainer>
				<FormCatergoryContainer>
					<Field component="select" name="catergory" value={values.catergory}>
						{props.catergories.map(catergory => (
							<option key={catergory} name={catergory}>
								{catergory}
							</option>
						))}
					</Field>
				</FormCatergoryContainer>
				<FormDateContainer>
					<Field type="date" name="due_date" value={values.due_date} />
				</FormDateContainer>
			
			</Form>
		</AddFormDiv>
	);
};

const addTodoFormValidationSchema = Yup.object().shape({
	item: Yup.string()
		.max(128, 'Item must not exceed 128 characters.')
		.required('Item is required.'),
	description: Yup.string()
});

const FormikAddTodoForm = withFormik({
	mapPropsToValues() {
		return {
			item: '',
			description: '',
			priority: '2',
			catergory: 'General',
			due_date: moment().format('YYYY-MM-DD')
		};
	},
	validationSchema: addTodoFormValidationSchema,
	handleSubmit(values, { props, resetForm }) {
		const todoObj = {
			item: values.item,
			description: JSON.stringify([values.description, values.catergory]),
			priority: values.priority,
			due_date: values.due_date
		};
		props.addTodo(todoObj);
		resetForm();
	}
})(AddTodoForm);

const mapStateToProps = state => {
	return {
		catergories: state.catergories,
		priorities: state.priorities,
		isAdding: state.isAdding
	};
};

export default connect(
	mapStateToProps,
	{ addTodo }
)(FormikAddTodoForm);
