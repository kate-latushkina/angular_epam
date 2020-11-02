import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service'

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  constructor(public coursesService: CoursesService) {}

  ngOnInit(): void {
  }

}
