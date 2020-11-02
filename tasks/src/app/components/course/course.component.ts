import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICourse } from '../../interfaces/course';
import { CoursesService } from '../../services/courses.service'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  @Input() item: ICourse;
  @Input() isFavorite: boolean;
  @Output() onFavorite: EventEmitter<number> = new EventEmitter<number>();

  constructor(public coursesService: CoursesService) {}

  public makeFavorite() {
    this.onFavorite.emit(this.item.id)
  }
}
