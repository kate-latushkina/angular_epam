import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { ICourse } from '../interfaces/course';
import { COURSE_ACTIONS, AUTH_ACTIONS } from './constants'; 

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

export class AuthAction implements Action {
  readonly type = AUTH_ACTIONS.AUTH;
  constructor(public payload: {login: string, password: number}) { }
}

export class LoginAction implements Action {
  readonly type = AUTH_ACTIONS.LOGIN;
  constructor(public payload: {token: string}) { }
}

export class LoginFailedAction implements Action {
  readonly type = AUTH_ACTIONS.LOGIN_FAILED;
  constructor(public payload: {error: HttpErrorResponse}) { }
}

export type Actions = 
LoadCoursesAction | 
StoreCoursesAction | 
ErrorAction | 
UpdateCourseAction |
DeleteCourseAction | 
AddCourseAction |
AuthAction |
LoginAction | LoginFailedAction