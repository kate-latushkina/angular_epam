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

    default:
      return state;
  }
} 