import { Component } from '@angular/core';
import {CoursesService} from '../../services/courses.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  public inputValue: string;
  constructor (public coursesService: CoursesService) {}
}
