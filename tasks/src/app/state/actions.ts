import { Action } from '@ngrx/store';
import { ICourse } from '../interfaces/course';
import { COURSE_ACTIONS } from './constants'; 

export class LoadCoursesAction implements Action {
  readonly type = COURSE_ACTIONS.LOAD_COURSES;
  constructor(public payload: {pageCoursesList: number, textFragment: string}) { }
}

export class StoreCoursesAction implements Action {
  readonly type = COURSE_ACTIONS.STORE_COURSES;
  constructor(public payload: {courses: ICourse[]}) { }
}

export type CourseAction = LoadCoursesAction | StoreCoursesAction