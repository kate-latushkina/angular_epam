import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListCoursesComponent implements OnInit {

  constructor(public coursesService: CoursesService) {}

  @Input() isText: string ;
  // @Input() isModal: boolean;

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
}