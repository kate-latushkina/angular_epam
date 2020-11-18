import { CourseAction } from './actions';
import { COURSE_ACTIONS } from './constants';

const initialState = {
  courses: [],
  error: '',
}

export function CourseReducer(state = initialState, action: CourseAction) {
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