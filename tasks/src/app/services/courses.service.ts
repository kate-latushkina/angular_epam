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
    // if (textFragment) {
    //   return this.httpClient.get('http://localhost:3004/courses', { params: {...data, textFragment}});
    // }
    return this.httpClient.get(`http://localhost:3004/courses`, {params: data})
  }

  public getItemById(id: number) {
    return this.httpClient.get(`http://localhost:3004/courses/${id}`)
  }

  public createCourse() {
    console.log('create course')
    this.modalCourseService.openModal();
  }

  public getItem(item: ICourse) {
    this.modalCourseService.openModal(item);
  }

  public updateItem() {
    console.log('save')
    this.modalCourseService.closeModal()
    // this.courses.push() запушить данные
  }

  public removeItem(id: number) {
    return this.httpClient.delete(`http://localhost:3004/courses/${id}`)
  }
}
