import { Component, Input, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { ModalService } from '../../services/modal.service';
import { ICourse } from '../../interfaces/course';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.scss'],
})
export class ListCoursesComponent implements OnInit {
  // public items: any = [];
  constructor(public coursesService: CoursesService, public modalService: ModalService, private httpClient: HttpClient) {}

  @Input() isText: string ;
  @Input() item: ICourse;

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

  public deleteItem(id: number) {
    this.modalService.openModal(this.coursesService.removeItem.bind(this.coursesService, id))
  }

  // public getCourses(): void {
  //   this.httpClient.get<ICourse[]>('http://localhost:3004/courses/')
  //       .subscribe((items: ICourse[]) => {
  //         this.items = items;
  //         console.log(items);
  //       });
  // }

}