import { Injectable, Input } from '@angular/core';
import { ICourse } from '../interfaces/course';
import { ModalCourseService } from './modal-course.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  @Input() isModal: boolean;
  constructor(public modalCourseService: ModalCourseService, private httpClient: HttpClient,) {}

  public getList() {
    return this.httpClient.get('http://localhost:3004/courses')
    // return this.courses;
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
  //   this.courses.forEach((course, index) => {
  //     if (course.id === id) {
  //       this.courses.splice(index, 1);
  //     }
  //   })
  }
}
