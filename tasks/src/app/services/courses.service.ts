import { Injectable, Input } from '@angular/core';
import { ICourse } from '../interfaces/course';
import { ModalCourseService } from './modal-course.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  @Input() isModal: boolean;
  public start: number = 0;
  public countCourses: number = 3;
  public results: any;

  constructor(public modalCourseService: ModalCourseService, private httpClient: HttpClient,) {}

  public getList(page: number = 1, textFragment?: string) {
    const data = {
      start: `${this.start}`, 
      count: `${this.countCourses * page}`,
    };
    if (textFragment) {
      return this.httpClient.get('http://localhost:3004/courses', { params: {...data, textFragment}});
    }
    return this.httpClient.get(`http://localhost:3004/courses`, {params: data})
  }

  public createCourse() {
    this.modalCourseService.openModal();
  }

  public search(terms: Observable<string>) {
    return terms.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(term => this.getList(1, term)));
  }

  public updateItem(itemData: ICourse, id: number) {
    return this.httpClient.patch(`http://localhost:3004/courses/${id}`, itemData)
  }

  public saveNewItem(itemData: ICourse) {
    this.modalCourseService.closeModal();
    return this.httpClient.post(`http://localhost:3004/courses`, itemData)
  }

  public removeItem(id: number) {
    return this.httpClient.delete(`http://localhost:3004/courses/${id}`)
  }

  public getAuthors() {
    return this.httpClient.get(`http://localhost:3004/authors`)
  }
}
