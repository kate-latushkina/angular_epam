import { HttpErrorResponse } from '@angular/common/http';
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

export class ErrorAction implements Action {
  readonly type = COURSE_ACTIONS.ERROR_LOAD;
  constructor(public payload: {error: HttpErrorResponse}) { }
}

export class UpdateCourseAction implements Action {
  readonly type = COURSE_ACTIONS.UPDATE_COURSE;
  constructor(public payload: {course: ICourse, id: number}) { }
}

export class DeleteCourseAction implements Action {
  readonly type = COURSE_ACTIONS.DELETE_COURSE;
  constructor(public payload: {id: number}) { }
}

export class AddCourseAction implements Action {
  readonly type = COURSE_ACTIONS.ADD_COURSE;
  constructor(public payload: {newCourse: ICourse}) { }
}

export type CourseAction = 
LoadCoursesAction | 
StoreCoursesAction | 
ErrorAction | 
UpdateCourseAction |
DeleteCourseAction | 
AddCourseAction