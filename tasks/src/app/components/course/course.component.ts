import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICourse } from '../../interfaces/course';
import { CoursesService } from '../../services/courses.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  @Input() item: ICourse;
  @Input() isFavorite: boolean;
  @Input() isModal: boolean;

  @Output() onFavorite: EventEmitter<number> = new EventEmitter<number>();
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();

  constructor(public coursesService: CoursesService, public modalService: ModalService) {}

  public makeFavorite() {
    this.onFavorite.emit(this.item.id)
    console.log(this.isModal)
  }

}
// this.coursesService.removeItem.bind(this.item.id)