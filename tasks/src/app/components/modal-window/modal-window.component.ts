import { Component, Input, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {

  @Input() isModal: boolean;
  constructor(public coursesService: CoursesService) {}
  
  public ngOnInit(): void {
  }
  public isVisibleModal() {
    this.isModal = !this.isModal;
    console.log(this.isModal)
  }
}
