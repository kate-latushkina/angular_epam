import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICourse } from '../../interfaces/course';
import { CoursesService } from '../../services/courses.service';
import { ModalCourseService } from '../../services/modal-course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent {
  @Input() item: ICourse;
  @Input() isFavorite: boolean;

  @Output() onFavorite: EventEmitter<number> = new EventEmitter<number>();
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();

  constructor(public coursesService: CoursesService, public modalCourseService: ModalCourseService) {}

  public makeFavorite() {
    this.onFavorite.emit(this.item.id)
  }
  public onEdit() {
    this.modalCourseService.openModal(this.item);
  }
}