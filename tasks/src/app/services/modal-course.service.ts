import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICourse } from '../interfaces/course';
import { Modal } from '../classes/modal';

@Injectable({
  providedIn: 'root'
})
export class ModalCourseService {

  public isOpen: BehaviorSubject<Modal> = new BehaviorSubject<Modal>(new Modal());

  openModal(course?: ICourse) {
    const mod = new Modal()
    mod.course = course;
    mod.isOpen = true;
    this.isOpen.next(mod);
    
  }
  closeModal() {
    const mod = new Modal();
    mod.isOpen = false;
    this.isOpen.next(mod);
  }
}
