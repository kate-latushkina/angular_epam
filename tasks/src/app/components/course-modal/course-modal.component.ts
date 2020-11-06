import { Component, OnInit } from '@angular/core';
import { ModalCourseService } from '../../services/modal-course.service';
import { CoursesService } from '../../services/courses.service';
import { Modal } from 'src/app/modal';
import { ICourse } from 'src/app/interfaces/course';

@Component({
  selector: 'app-course-modal',
  templateUrl: './course-modal.component.html',
  styleUrls: ['./course-modal.component.scss']
})
export class CourseModalComponent implements OnInit {

  public isOpen: boolean;
  public item: ICourse;
  constructor(public modalCourseService: ModalCourseService, public coursesService: CoursesService) { }

  public ngOnInit(): void {
    this.modalCourseService.isOpen.subscribe((modal: Modal) => {
      this.isOpen = modal.isOpen;
      this.item = modal.course;
    });
  }
  
  public close() {
    this.modalCourseService.closeModal()
  }
}
