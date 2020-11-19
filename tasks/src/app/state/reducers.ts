import { Actions } from './actions';
import { COURSE_ACTIONS, AUTH_ACTIONS } from './constants';

const initialState = {
  courses: [],
  error: '',
}

export function CourseReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case COURSE_ACTIONS.STORE_COURSES:
      return {
        ...state,
        courses: action.payload.courses,
      };
    case COURSE_ACTIONS.ERROR_LOAD:
      return {
        ...state,
        error: '',
      };
    // case COURSE_ACTIONS.STORE_AUTHORS:
    //   return {
    //     ...state,
    //     authors: action.payload.authors,
    //   };
    default:
      return state;
  }
}

const defaultState = {
  token: '',
  error: '',
};

export function AuthReducer(state = defaultState, action: Actions) {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN:
      return {
        ...state,
        token: action.payload.token,
      };
    case AUTH_ACTIONS.LOGIN_FAILED:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
}