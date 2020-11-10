import { Component, Input, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { ModalService } from '../../services/modal.service';
import { ICourse } from '../../interfaces/course';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.scss'],
})
export class ListCoursesComponent implements OnInit {

  public pageCoursesList: number = 1;
  constructor(public coursesService: CoursesService, public modalService: ModalService) {}

  @Input() isText: string ;
  @Input() item: ICourse;

  public courses: ICourse[];
  public responseFavotite: boolean;

  public favorites: Set<number> = new Set();
  public ngOnInit(): void {
    // this.isText = '';
    this.updateCourses(this.pageCoursesList)
  }

  public clickLoadMore() {
    this.pageCoursesList++;
    this.updateCourses(this.pageCoursesList);
  }

  public updateCourses(page: number) {
    this.coursesService
    .getList(page, this.isText)
    .subscribe((response: ICourse[]) => {
      this.courses = response
      console.log(response)
    })
    // console.log(this.isText)
  }

  public makeFavorite(id: number) {
    this.coursesService
    .getItemById(id)
    .subscribe((response) => {
      // this.responseFavotite = response
      console.log(this.responseFavotite)
    })
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