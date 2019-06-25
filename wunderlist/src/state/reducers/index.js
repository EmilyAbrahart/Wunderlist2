import {
  FETCH_TODOS_START,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  ADD_NEW_TODO_SUCCESS,
  ADD_NEW_TODO_FAILURE,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILURE,
  UPDATE_TODO_START,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "./../actions/";

const initialState = {
  todos: [],
  isFetching: false,
  isUpdating: false,
  isAuthenticating: false,
  error: "",
  catergories: ["General", "Shopping", "Work"],
  priorities: [1, 2, 3]
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isAuthenticating: true
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticating: false
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
        error: action.payload
      };

    case FETCH_TODOS_START:
      return {
        ...state,
        isFetching: true,
        isUpdating: false,
        error: ""
      };

    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        isUpdating: false,
        todos: action.payload
      };

    case FETCH_TODOS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
        isUpdating: false
      };

    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload[0]),
      };

    case DELETE_TODO_FAILURE:
      return {
        ...state,
        error: action.payload,
        isUpdating: false,
        isFetching: false
      };

    case ADD_NEW_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        isUpdating: false,
        isFetching: false
      };
    case ADD_NEW_TODO_FAILURE:
      return {
        ...state,
        error: action.payload,
        isUpdating: false,
        isFetching: false
      };

    case UPDATE_TODO_START:
      return {
        ...state,
        isUpdating: true,
        isFetching: false
      };

    case UPDATE_TODO_SUCCESS:
      return {
        ...state,
        todos: action.payload,
        isUpdating: false,
        isFetching: false
      };

    case UPDATE_TODO_FAILURE:
      return {
        ...state,
        error: action.payload,
        isUpdating: false,
        isFetching: false
      };

    default:
      return state;
  }
};
