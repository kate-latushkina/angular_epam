import { Component, OnInit } from '@angular/core';
import { ModalCourseService } from '../../services/modal-course.service';
import { CoursesService } from '../../services/courses.service';
import { Modal } from 'src/app/modal';

@Component({
  selector: 'app-course-modal',
  templateUrl: './course-modal.component.html',
  styleUrls: ['./course-modal.component.scss']
})
export class CourseModalComponent implements OnInit {

  public courseInfo: Modal;
  constructor(public modalCourseService: ModalCourseService, public coursesService: CoursesService) { }

  public ngOnInit(): void {
    this.modalCourseService.courseInfo.subscribe(courseInfo => courseInfo = courseInfo);
  }
}
