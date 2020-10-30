import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ICourse } from '../../interfaces/course';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListCoursesComponent implements OnInit {
  @Input() isText: string ;

  public favorites: Set<number> = new Set();
  public ngOnInit(): void {
    this.isText = '';
  }

  public makeFavorite(id: number): void {
    if (this.favorites.has(id)) {
      this.favorites.delete(id);
    } else {
      this.favorites.add(id);
    }
  }

  public getCourses(): ICourse[] {
    return [
      {
        id: 1,
        title: 'Video course 1. First',
        createDate: new Date('2020-11-02'),
        duration: 107,
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      },
      {
        id: 2,
        title: 'Video course 2. Second',
        createDate: new Date('2020-10-17'),
        duration: 32,
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      },
      {
        id: 3,
        title: 'Video course 3. Third',
        createDate: new Date('2020-10-25'),
        duration: 112,
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      },
    ];
  }
}