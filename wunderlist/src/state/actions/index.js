import axios from 'axios';
import axiosWithAuth from './../../authentication/axiosWithAuth';

export const FETCH_TODOS_START = 'FETCH_TODOS_START';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOSFAILURE = 'FETCH_TODOS_FAILURE';
export const ADD_NEW_TODO = 'ADD_NEW_TODO';
export const ADD_NEW_TODO_SUCCESS = 'ADD_NEW_TODO_SUCCESS';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const fetchTodos = () => dispatch => {
	dispatch({ type: FETCH_TODOS_START });
	axiosWithAuth()
		.get('https://backend-wunderlist.herokuapp.com/api/todos')
		.then(res => {
			dispatch({ type: FETCH_TODOS_SUCCESS, payload: res.data });
		})
		.catch(err =>
			dispatch({
				type: FETCH_TODOS_FAILURE,
				payload: err.response
			})
		);
};

export const login = (username, password) => dispatch => {
	const credentials = { username, password };

	axios
		.post('https://backend-wunderlist.herokuapp.com/api/auth/login', credentials)
		.then(res => {
			localStorage.setItem('token', res.data.payload);
		})
		.catch(err => console.log(`Could not login - ${err.error}`));
};

export const addTodo = todo => dispatch => {
	dispatch({ type: ADD_NEW_TODO });
	axiosWithAuth()
		.post('https://backend-wunderlist.herokuapp.com/api/todos', todo)
		.then(res => dispatch({ type: ADD_NEW_TODO_SUCCESS, payload: res.data }))
		.catch(err => console.log(`Could not add task: ${err.message}`));
};

export const deleteTodo = id => dispatch => {
	dispatch({ type: DELETE_TODO });
	axiosWithAuth()
		.delete(`https://backend-wunderlist.herokuapp.com/api/todos/${id}`)
		.then(res => dispatch({ type: DELETE_TODO_SUCCESS, payload: res.data }))
		.catch(err => {
			console.log(`Could not delete task: ${err.message}`);
		});
};