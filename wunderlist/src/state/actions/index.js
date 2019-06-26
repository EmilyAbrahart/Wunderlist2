import axios from "axios";
import axiosWithAuth from "./../../authentication/axiosWithAuth";
import moment from "moment";

// Registration
export const REGISTRATION_START = "REGISTRATION_START";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILURE = "REGISTRATION_FAILURE";

export const registerUser = credentials => dispatch => {
  dispatch({ type: REGISTRATION_START });
  axios
    .post(
      "https://backend-wunderlist.herokuapp.com/api/auth/register",
      credentials
    )
    .then(res => dispatch({ type: REGISTRATION_SUCCESS, payload: res.data }))
    .catch(() =>
      dispatch({
        type: REGISTRATION_FAILURE,
        payload: "A user with that name already exists. Please try again."
      })
    );
};

// Authentication
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loginUser = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  axios
    .post(
      "https://backend-wunderlist.herokuapp.com/api/auth/login",
      credentials
    )
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
      localStorage.setItem("token", res.data.token);
    })
    .catch(() =>
      dispatch({
        type: LOGIN_FAILURE,
        payload:
          "Incorrect username or password. Please check your credentials and try again."
      })
    );
};

// Fetching tasks
export const FETCH_TODOS_START = "FETCH_TODOS_START";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE";

export const fetchTodos = () => dispatch => {
  dispatch({ type: FETCH_TODOS_START });
  axiosWithAuth()
    .get("https://backend-wunderlist.herokuapp.com/api/todos")
    .then(res => {
      dispatch({ type: FETCH_TODOS_SUCCESS, payload: res.data });
    })
    .catch(() =>
      dispatch({
        type: FETCH_TODOS_FAILURE,
        payload: "Unable to fetch tasks at this time. Please try again later."
      })
    );
};

// Add new tasks
export const TOGGLE_FORM = "TOGGLE_FORM";
export const ADD_NEW_TODO = "ADD_NEW_TODO";
export const ADD_NEW_TODO_SUCCESS = "ADD_NEW_TODO_SUCCESS";
export const ADD_NEW_TODO_FAILURE = "ADD_NEW_TODO_FAILURE";

export const toggleForm = () => dispatch => {
  dispatch({ type: TOGGLE_FORM });
};
export const addTodo = todo => dispatch => {
  dispatch({ type: ADD_NEW_TODO });
  axiosWithAuth()
    .post("https://backend-wunderlist.herokuapp.com/api/todos", todo)
    .then(res => dispatch({ type: ADD_NEW_TODO_SUCCESS, payload: res.data }))
    .catch(() =>
      dispatch({
        type: ADD_NEW_TODO_FAILURE,
        payload:
          "Unable to add task. Please ensure all required fields are completed and try again."
      })
    );
};

// Delete tasks
export const DELETE_TODO = "DELETE_TODO";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const DELETE_TODO_FAILURE = "DELETE_TODO_FAILURE";

export const deleteTodo = id => dispatch => {
  dispatch({ type: DELETE_TODO });
  axiosWithAuth()
    .delete(`https://backend-wunderlist.herokuapp.com/api/todos/${id}`)
    .then(res => dispatch({ type: DELETE_TODO_SUCCESS, payload: res.data }))
    .catch(() =>
      dispatch({
        type: DELETE_TODO_FAILURE,
        payload:
          "Unable to delete task. The task may have already been deleted."
      })
    );
};

// Update tasks
export const UPDATE = "UPDATE";
export const UPDATE_TODO_START = "UPDATE_TODO_START";
export const UPDATE_TODO_SUCCESS = "UPDATE_TODO_SUCCESS";
export const UPDATE_TODO_FAILURE = "UPDATE_TODO_FAILURE";

export const updateTodo = (index, id, todo) => dispatch => {
  dispatch({ type: UPDATE_TODO_START });
  axiosWithAuth()
    .put(`https://backend-wunderlist.herokuapp.com/api/todos/${id}`, todo)
    .then(res =>
      dispatch({ type: UPDATE_TODO_SUCCESS, payload: [index, todo] })
    )
    .catch(() =>
      dispatch({
        type: UPDATE_TODO_FAILURE,
        payload: "Unable to update task. Please try again."
      })
    );
};

// Filtering
export const FILTER_ALL = "FILTER_ALL";
export const FILTER_CATERGORY = "FILTER_CATERGORY";
export const FILTER_DUE_DATE = "FILTER_DUE_DATE";

export const filterAll = () => dispatch => {
  dispatch({ type: FILTER_ALL });
};

export const filterCatergory = catergory => dispatch => {
  dispatch({ type: FILTER_CATERGORY, payload: catergory });
};

export const filterDueDate = timespan => dispatch => {
  dispatch({ type: FILTER_DUE_DATE, payload: [timespan, moment()] });
};

// Search
export const SEARCH_START = "SEARCH_START";
export const SEARCH_END = "SEARCH_END";
export const SEARCH = "SEARCH";

export const searchStart = () => dispatch => {
  dispatch({ type: SEARCH_START });
};

export const searchEnd = () => dispatch => {
  dispatch({ type: SEARCH_START });
};

export const search = query => dispatch => {
  dispatch({ type: SEARCH, payload: query });
};
