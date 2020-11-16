import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../../services/courses.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public inputValue: string;

  constructor (public coursesService: CoursesService) {}
  public ngOnInit(): void {
  }
}
