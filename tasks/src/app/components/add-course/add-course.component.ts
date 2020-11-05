import { Component, OnInit } from '@angular/core';
import { Modal } from 'src/app/modal';
import { CoursesService } from '../../services/courses.service';
import { ModalCourseService } from '../../services/modal-course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  public courseInfo: Modal;
  constructor(public coursesService: CoursesService, public modalCourseService: ModalCourseService) {}

  public ngOnInit(): void {
    this.modalCourseService.courseInfo.subscribe(courseInfo => courseInfo = courseInfo);
  }
}
