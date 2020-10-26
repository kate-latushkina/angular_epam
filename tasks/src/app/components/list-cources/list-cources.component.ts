import { Component, OnInit } from '@angular/core';
import {ICource} from './../../interfaces/cource';

@Component({
  selector: 'app-list-cources',
  templateUrl: './list-cources.component.html',
  styleUrls: ['./list-cources.component.css']
})
export class ListCourcesComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
  }

  public getCources(): ICource[] {
    console.log(7)
    return [{
      id: 1,
      title: 'Video cource 1',
      // date: '26/10/2020',
      // duration: '107 min',
      // description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut 
      // labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      // Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
      // sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    }]
  }
}
