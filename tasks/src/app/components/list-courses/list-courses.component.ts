import { Component, OnInit } from '@angular/core';
import { ICourse } from '../../interfaces/course';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.scss'],
})

export class ListCoursesComponent implements OnInit {

  public ngOnInit(): void {
  }

  public getCourses(): ICourse[] {
    return [{
      id: 1,
      title: 'Video course 1',
      createDate: '26/10/2020',
      duration: 107,
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut 
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
      sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    }]
  }
}