import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICourse } from '../../interfaces/course';
import { ModalCourseService } from '../../services/modal-course.service';
import { Autentification } from '../../classes/autentification'
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent {
  @Input() item: ICourse;
  @Input() isFavorite: boolean;
  @Input() isAuth: boolean;

  @Output() onFavorite: EventEmitter<number> = new EventEmitter<number>();
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();

  constructor(public modalCourseService: ModalCourseService, public authService: AuthService) {}

  public makeFavorite() {
    this.onFavorite.emit(this.item.id)
  }
  public onEdit() {
    this.modalCourseService.openModal(this.item);
  }
  public ngOnInit(): void {
    this.authService.isAuth.subscribe((user: Autentification) => {
      this.isAuth = user.isAuth;
    })
  }
}