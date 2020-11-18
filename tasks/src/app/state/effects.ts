import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ICourse } from '../interfaces/course';
import { AuthService } from '../services/auth.service';
import { CoursesService } from '../services/courses.service';
import { LoadCoursesAction, StoreCoursesAction } from './actions';
import { COURSE_ACTIONS } from './constants';

@Injectable()
export class CourseEffect {

  constructor(private actions$: Actions,
    private coursesService: CoursesService,
    public authService: AuthService) {}

    @Effect()
    course$ = this.actions$.pipe(
      ofType(COURSE_ACTIONS.LOAD_COURSES),
      switchMap((action: LoadCoursesAction) => {
          const { pageCoursesList, textFragment } = action.payload;
          return this.coursesService.getList(pageCoursesList, textFragment)
              .pipe(
                  map((courses: ICourse[]) => {
                        
                      return new StoreCoursesAction({courses});
                  }),
                  // catchError((error: HttpErrorResponse) => of(new FailedAction(error)))
              );
      })
    );
}