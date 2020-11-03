import { Component, Input, OnInit, Output } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {

  @Input() isModal: boolean;
  constructor(public modalService: ModalService) {}
  
  public ngOnInit(): void {
  }
  public isVisibleModal() {
    this.isModal = !this.isModal;
    console.log(this.isModal)
  }
}
