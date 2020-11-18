import { Component, Input, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { ModalService } from '../../services/modal.service';
import { ICourse } from '../../interfaces/course';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { distinctUntilChanged, skipWhile } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/app.state';
import { LoadCoursesAction } from 'src/app/state/actions';
import { Subscription } from 'rxjs';
import { stat } from 'fs';

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

  constructor(public coursesService: CoursesService, 
    public modalService: ModalService,
    public authService: AuthService,
    public store: Store<IAppState>) 
    {
      this.coursesListSub = this.store
      .select(state => state.course.courses)
      .subscribe((newCoursesList) => {
        if (newCoursesList.length === 0) {
          this.courseList = [];
          this.isFound = false;
          this.loading = this.authService.setLoading();
        } else {
          this.courseList = newCoursesList;
          this.loading = this.authService.setLoading();
          console.log(this.loading)
          this.isFound = true;
        }
      });
    }

  @Input() item: ICourse;

  public courses: ICourse[];

  public responseFavotite: boolean;
  public isFound: boolean;
  public loading: boolean = false;


  public favorites: Set<number> = new Set();
  public ngOnInit(): void {
    // this.coursesService.text$.pipe(
    //   debounceTime(500),
    //   distinctUntilChanged(),
    //   skipWhile(name => name.length < 3))
    //   .subscribe(text => this.updateCourses(this.pageCoursesList, text))
    // this.updateCourses(this.pageCoursesList);
    
    this.loadCourses()
  }

  public loadCourses(textFragment?: string): void {
    const { pageCoursesList } = this;
    this.store.dispatch(new LoadCoursesAction({pageCoursesList, textFragment}));
  }

  public clickLoadMore() {
    this.pageCoursesList++;
    this.loadCourses()
    this.loading = this.authService.setLoading();
  }

  public makeFavorite(lesson: ICourse, id: number) {
    lesson.isTopRated = !lesson.isTopRated
    this.coursesService
    .updateItem(lesson, id)
    .subscribe()
  }

  public openDeleteModal(id: number) {
    this.modalService.openModal(this.deleteItem.bind(this, id))
  }

  public deleteItem(id: number) {
    this.loading = this.authService.setLoading();
    this.coursesService
    .removeItem(id)
    .subscribe(() => {
      this.courses = this.courses.filter(course => course.id !== id);
      this.loading = this.authService.setLoading();
    })
  }  
}