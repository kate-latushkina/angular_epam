import { Injectable, Input, Output } from '@angular/core';
import { ICourse } from '../interfaces/course';
import { ModalCourseService } from './modal-course.service'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  @Input() isModal: boolean;
  constructor(public modalCourseService: ModalCourseService) {}

  public courses = [
    {
      id: 1,
      title: 'Video course 1. First',
      createDate: new Date('2020-11-12'),
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

  public getList(): ICourse[] {
    return this.courses;
  }

  public createCourse() {
    console.log('create course')
    // this.modalCourseService.openModal();
  }

  public getItem(item: ICourse) {
    this.modalCourseService.openModal(item);
    console.log(item)
  }

  public updateItem() {
    console.log('save')
    // this.modalCourseService.closeModal(false)
    // this.courses.push() запушить данные
  }

  public removeItem(id: number) {
    this.courses.forEach((course, index) => {
      if (course.id === id) {
        this.courses.splice(index, 1);
      }
    })
  }
}
