import { Component, Input, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { ModalService } from '../../services/modal.service';
import { ICourse } from '../../interfaces/course';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { distinctUntilChanged, skipWhile } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/app.state';
import { DeleteCourseAction, LoadCoursesAction, UpdateCourseAction } from 'src/app/state/actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.scss'],
})
export class ListCoursesComponent implements OnInit {

  public coursesListSub: Subscription;
  public courseList: ICourse[] = [];

  public pageCoursesList: number = 1;
  public inputText: string;
  @Input() item: ICourse;

  public isFound: boolean;
  public loading: boolean = false;

  constructor(public coursesService: CoursesService, 
    public modalService: ModalService,
    public authService: AuthService,
    public store: Store<IAppState>) 
    {
      this.coursesListSub = this.store
      .select(state => state.course.courses)
      .subscribe((newCoursesList) => {
        if (newCoursesList.length === 0) {
          this.loading = this.authService.setLoading(true);
          this.courseList = [];
          this.isFound = false;
          this.loading = this.authService.setLoading(false);
        } else {
          this.courseList = newCoursesList;
          this.isFound = true;
          this.loading = this.authService.setLoading(false);
        }
      });
    }

  public ngOnInit(): void {
    this.coursesService.text$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      skipWhile(name => name.length < 3))
      .subscribe(text => {
        this.loadCourses(text)
      })
    this.loadCourses()
  }

  public loadCourses(textFragment?: string): void {
    this.loading = this.authService.setLoading(true);
    const pageCoursesList = this.pageCoursesList;
    this.store.dispatch(new LoadCoursesAction({pageCoursesList, textFragment}));
  }

  public clickLoadMore() {
    this.pageCoursesList++;
    this.loadCourses()
  }

  public makeFavorite(newCourse: ICourse) {
    const id = newCourse.id;
    const course = Object.assign({}, newCourse)
    course.isTopRated = !course.isTopRated
    this.store.dispatch(new UpdateCourseAction({course, id}));
  }

  public openDeleteModal(id: number) {
    this.modalService.openModal(this.deleteItem.bind(this, id))
  }

  public deleteItem(id: number) {
    this.store.dispatch(new DeleteCourseAction({id}));
    this.loading = this.authService.setLoading(true);
  }  
}