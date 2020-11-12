import { Component, Input, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { ModalService } from '../../services/modal.service';
import { ICourse } from '../../interfaces/course';
import { switchMap, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.scss'],
})
export class ListCoursesComponent implements OnInit {

  public pageCoursesList: number = 1;
  public inputText: string;
  constructor(public coursesService: CoursesService, public modalService: ModalService, private httpClient: HttpClient) {}

  @Input() isTextEvent: string;
  @Input() item: ICourse;

  public courses: ICourse[];
  public course: ICourse;
  public responseFavotite: boolean;
  public isFound: boolean;

  public favorites: Set<number> = new Set();
  public ngOnInit(): void {
    this.updateCourses(this.pageCoursesList)
  }

  public clickLoadMore() {
    this.pageCoursesList++;
    this.updateCourses(this.pageCoursesList, this.inputText);
  }

  public updateCourses(page: number, text?: string) {
    this.coursesService
    .getList(page, text)
    .subscribe((response: ICourse[]) => {
      if (response.length == 0) {
        this.isFound = false;
        this.courses = []
      } else {
        this.isFound = true;
        this.courses = response
      }
    })
  }

  public searchCourses(text: string) {
    this.pageCoursesList = 1;
    this.inputText = text;
    this.updateCourses(this.pageCoursesList, text)
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
    this.coursesService
    .removeItem(id)
    .subscribe(() => {
      this.courses = this.courses.filter(course => course.id !== id);
    })
  }
}