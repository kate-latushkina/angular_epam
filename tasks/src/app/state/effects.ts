import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ICourse } from '../interfaces/course';
import { AuthService } from '../services/auth.service';
import { CoursesService } from '../services/courses.service';
import { AddCourseAction, DeleteCourseAction, ErrorAction, LoadCoursesAction, StoreCoursesAction, UpdateCourseAction } from './actions';
import { COURSE_ACTIONS } from './constants';

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