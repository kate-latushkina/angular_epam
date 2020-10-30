import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICourse } from '../../interfaces/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @Input() item: ICourse;
  @Input() isFavorite: boolean;
  @Output() onFavorite: EventEmitter<number> = new EventEmitter<number>();
  public ngOnInit(): void {
  }
  public makeFavorite() {
    this.onFavorite.emit(this.item.id)
  }
}
