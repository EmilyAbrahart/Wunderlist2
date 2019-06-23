import {
  FETCH_TODOS_START,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  ADD_NEW_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
} from "./../actions/";

const initialState = {
  todos: [],
  isFetching: false,
  isUpdating: false,
  error: ""
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };

    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        todos: action.payload
      };

    case FETCH_TODOS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        todos: action.payload
      };

    case ADD_NEW_TODO_SUCCESS:
      return {
        ...state,
        todos: action.payload
      };

    default:
      return state;
  }
};
