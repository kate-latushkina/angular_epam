import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { ModalCourseService } from '../../services/modal-course.service';
import { CoursesService } from '../../services/courses.service';
import { Modal } from 'src/app/classes/modal';
import { ICourse } from 'src/app/interfaces/course';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { AddCourseAction, UpdateCourseAction } from 'src/app/state/actions';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/app.state';
import { IAuthor } from 'src/app/interfaces/author';
import { formatDate } from '@angular/common';

export const FORM_DATE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CourseModalComponent),
  multi: true,
};

@Component({
  selector: 'app-course-modal',
  templateUrl: './course-modal.component.html',
  styleUrls: ['./course-modal.component.scss'],
  providers: [FORM_DATE_VALUE_ACCESSOR]
})
export class CourseModalComponent implements ControlValueAccessor, OnInit, OnDestroy {

  public isOpen: boolean;
  public item: ICourse;
  public formModal: FormGroup;
  public allAuthors: IAuthor;
  public choosedAuthors: IAuthor[] = [];

  public onChange: any = () => {};
  public onTouched: any = () => {};

  constructor(public modalCourseService: ModalCourseService,
    public coursesService: CoursesService,
    public store: Store<IAppState>) { }

  public ngOnInit(): void {
    this.modalCourseService.isOpen.subscribe((modal: Modal) => {
      this.isOpen = modal.isOpen;
      if (modal.course) {
        this.item = modal.course;
      }
      this.getAllAuthors()
      this.setForm();
    });
  }

  public ngOnDestroy(): void {
    this.modalCourseService.isOpen.unsubscribe();
  }
  
  public setForm() {
    this.formModal = new FormGroup({
      titleControl: new FormControl(this.item.name, [Validators.required, Validators.maxLength(50)]),
      descriptionControl: new FormControl(this.item.description, [Validators.required, Validators.maxLength(500)]),
      lengthControl: new FormControl(this.item.length, Validators.required),
      dateControl: new FormControl(formatDate(this.item.date, 'yyyy-MM-dd', 'en'), Validators.required),
      authorControl: new FormControl('')
    });
  }

  public saveCourse(): void {
    const course = Object.assign({}, this.item);
    course.name = this.formModal.value.titleControl;
    course.description = this.formModal.value.descriptionControl;
    course.date = new Date(Date.parse(this.formModal.value.dateControl));
    course.length = this.formModal.value.lengthControl;
    for(let key in this.allAuthors) {
      const el = this.formModal.value.authorControl
      if(this.allAuthors[key].name === el) {
        this.addAuthor(this.allAuthors[key])
      }
    }
    console.log(this.choosedAuthors)
    course.authors = this.choosedAuthors;
    if (this.item.name) {
      const id = this.item.id;
      this.store.dispatch(new UpdateCourseAction({ course, id }));
      this.modalCourseService.closeModal();
    } else {
      const newCourse = course
      this.store.dispatch(new AddCourseAction({ newCourse }));
    }
  }

  public getAllAuthors() {
    this.coursesService
      .getAuthors()
      .subscribe((authors: IAuthor) => {
        this.allAuthors = authors;
      })  
    this.choosedAuthors = this.item.authors;
  }

  public deleteAuthors(item: IAuthor) {
    this.choosedAuthors = this.choosedAuthors.filter((author: IAuthor) => {
      return author.name !== item.name;
    });
  }

  public addAuthor(author: IAuthor) {
    if(this.choosedAuthors['id'] === null) {
      this.choosedAuthors = [author];
    } else {
      this.choosedAuthors = [...this.choosedAuthors, author];
    }
  }

  public registerOnChange(fn): void {
    this.onChange = fn;
  }

  public writeValue(value): void {
    if (value) {
      this.formModal.value.dateControl.setValue(value);
    }
  }

  public registerOnTouched(fn): void {
    this.onTouched = fn;
  }
}
