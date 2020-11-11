import { Injectable, Input } from '@angular/core';
import { ICourse } from '../interfaces/course';
import { ModalCourseService } from './modal-course.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  @Input() isModal: boolean;
  public start: number = 0;
  public countCourses: number = 3;

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

  public getItemById(id: number) {
    return this.httpClient.get(`http://localhost:3004/courses/${id}`)
  }

  public createCourse() {
    this.modalCourseService.openModal();
  }

  public updateItem(itemData: ICourse, id: number) {
    this.modalCourseService.closeModal();
    return this.httpClient.patch(`http://localhost:3004/courses/${id}`, itemData)
  }

  public saveNewItem(itemData: ICourse) {
    this.modalCourseService.closeModal();
    return this.httpClient.post(`http://localhost:3004/courses`, itemData)
  }

  public removeItem(id: number) {
    return this.httpClient.delete(`http://localhost:3004/courses/${id}`)
  }
}
