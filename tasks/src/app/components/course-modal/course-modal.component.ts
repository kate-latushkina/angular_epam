import { Component, OnInit } from '@angular/core';
import { ModalCourseService } from '../../services/modal-course.service';
import { CoursesService } from '../../services/courses.service';
import { Modal } from 'src/app/classes/modal';
import { ICourse } from 'src/app/interfaces/course';
import { NgForm } from '@angular/forms';
import { AddCourseAction, UpdateCourseAction } from 'src/app/state/actions';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/app.state';

@Component({
  selector: 'app-course-modal',
  templateUrl: './course-modal.component.html',
  styleUrls: ['./course-modal.component.scss']
})
export class CourseModalComponent implements OnInit {

  public isOpen: boolean;
  public item: ICourse;
  public defaultName: string;
  public defaultDescription: string;
  public defaultLength: number;
  public defaultDate: Date;

  constructor(public modalCourseService: ModalCourseService, 
    public coursesService: CoursesService, 
    public store: Store<IAppState>) { }

  public ngOnInit(): void {
    this.modalCourseService.isOpen.subscribe((modal: Modal) => {
      this.isOpen = modal.isOpen;
      if(modal.course) {
        this.item = modal.course;
        this.defaultName = this.item.name
        this.defaultDescription = this.item.description
        this.defaultLength = this.item.length
        this.defaultDate = this.item.date
      } 
    });
  }
  
  public close() {
    this.modalCourseService.closeModal()
  }

  public saveCourse(item: NgForm) {
    if (this.defaultName) {
      const course = item.value
      const id = this.item.id
      this.store.dispatch(new UpdateCourseAction({course, id}));
      this.modalCourseService.closeModal();
    } else {
      const newCourse = item.value
      this.store.dispatch(new AddCourseAction({newCourse}));
    }
  }

  // public getAllAuthors() {
  //   this.coursesService
  //     .getAuthors()
  //     .subscribe(authors => {
  //       this.allAuthors = authors
  //       console.log(authors)
  //     })
  // }
}
