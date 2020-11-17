import { Component, Input, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { ModalService } from '../../services/modal.service';
import { ICourse } from '../../interfaces/course';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { distinctUntilChanged, skipWhile } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.scss'],
})
export class ListCoursesComponent implements OnInit {

  public pageCoursesList: number = 1;
  public inputText: string;
  constructor(public coursesService: CoursesService, 
    public modalService: ModalService,
    public authService: AuthService) {}

  @Input() item: ICourse;

  public courses: ICourse[];
  public course: ICourse;
  public responseFavotite: boolean;
  public isFound: boolean;
  public loading: boolean = false;

  public favorites: Set<number> = new Set();
  public ngOnInit(): void {
    this.coursesService.text$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      skipWhile(name => name.length < 3))
      .subscribe(text => this.updateCourses(this.pageCoursesList, text))
    this.updateCourses(this.pageCoursesList);
  }

  public clickLoadMore() {
    this.pageCoursesList++;
    this.updateCourses(this.pageCoursesList, this.inputText);
  }

  public updateCourses(page: number, text?: string) {
    this.loading = this.authService.setLoading();
    this.coursesService
    .getList(page, text)
    .subscribe((response: ICourse[]) => {
      if (response.length == 0) {
        this.isFound = false;
        this.courses = [];
        this.loading = this.authService.setLoading();
      } else {
        this.isFound = true;
        this.courses = response;
        this.loading = this.authService.setLoading();
      }
    })
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