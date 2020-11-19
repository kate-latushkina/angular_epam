import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { ICourse } from '../interfaces/course';
import { AuthService } from '../services/auth.service';
import { CoursesService } from '../services/courses.service';
import { AddCourseAction, AuthAction, DeleteCourseAction, ErrorAction, LoadCoursesAction, LoginAction, LoginFailedAction, StoreCoursesAction, UpdateCourseAction } from './actions';
import { COURSE_ACTIONS, AUTH_ACTIONS } from './constants';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class CourseEffect {

  constructor(private actions$: Actions,
    private coursesService: CoursesService,
    public authService: AuthService) { }

  @Effect()
  course$ = this.actions$.pipe(
    ofType(COURSE_ACTIONS.LOAD_COURSES),
    switchMap((action: LoadCoursesAction) => {
      const { pageCoursesList, textFragment } = action.payload;
      return this.coursesService.getList(pageCoursesList, textFragment)
        .pipe(
          map((courses: ICourse[]) => {
            return new StoreCoursesAction({ courses });
          }),
          catchError((error: HttpErrorResponse) => of(new ErrorAction(error)))
        );
    })
  );

  @Effect()
  update$ = this.actions$.pipe(
    ofType(COURSE_ACTIONS.UPDATE_COURSE),
    switchMap((action: UpdateCourseAction) => {
      const { course, id } = action.payload;
      return this.coursesService.updateItem(course, id)
        .pipe(
          map(() => {
            return new LoadCoursesAction({ pageCoursesList: 1, textFragment: '' })
          }),
          catchError((error: HttpErrorResponse) => of(new ErrorAction(error)))
        );
    })
  );

  @Effect()
  delete$ = this.actions$.pipe(
    ofType(COURSE_ACTIONS.DELETE_COURSE),
    switchMap((action: DeleteCourseAction) => {
      return this.coursesService.removeItem(action.payload.id)
        .pipe(
          map(() => {
            return new LoadCoursesAction({ pageCoursesList: 1, textFragment: '' })
          }),
          catchError((error: HttpErrorResponse) => of(new ErrorAction(error)))
        );
    })
  );

  @Effect()
  add$ = this.actions$.pipe(
    ofType(COURSE_ACTIONS.ADD_COURSE),
    switchMap((action: AddCourseAction) => {
      return this.coursesService.saveNewItem(action.payload.newCourse)
        .pipe(
          map(() => {
            return new LoadCoursesAction({ pageCoursesList: 1, textFragment: '' })
          }),
          catchError((error: HttpErrorResponse) => of(new ErrorAction(error)))
        );
    })
  );
}

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions,
    private authService: AuthService,
    private router: Router, 
    private toastr: ToastrService) { }

  @Effect()
  auth$ = this.actions$.pipe(
    ofType(AUTH_ACTIONS.AUTH),
    switchMap((action: AuthAction) => {
      return this.authService.checkUser(action.payload.login, action.payload.password)
        .pipe(
          map((data) => {
            return data['token'];
          }),
          map((token: string) => {
            localStorage.setItem('token', token);
            return new LoginAction({ token });
          }),
          catchError((error: HttpErrorResponse) => {
            this.toastr.error('Wrong e-mail or password');
            return of(new LoginFailedAction(error))})
        );
    })
  );
  @Effect({dispatch: false})
  show$ = this.actions$.pipe(
    ofType(AUTH_ACTIONS.LOGIN),
    switchMap((action: LoginAction) => {
      return this.authService.showUser(action.payload.token)
        .pipe(
          tap((data) => {
            this.authService.login(data);
            this.router.navigate(['/main']);
          }),
          catchError((error: HttpErrorResponse) => {
            this.toastr.error('Wrong e-mail or password');
            return of(new LoginFailedAction(error))})
        );
    })
  );
}