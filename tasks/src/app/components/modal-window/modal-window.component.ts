import { Component, Input, OnInit, Output } from '@angular/core';
import { Modal } from 'src/app/classes/modal';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {

  public isOpen: boolean;
  public closeFn: () => void;
  constructor(public modalService: ModalService) {}
  
  public ngOnInit(): void {
    this.modalService.isOpen.subscribe((modal: Modal) => {
      this.isOpen = modal.isOpen;
      this.closeFn = modal?.closeFn;
    })
  }
  public close() {
    this.closeFn()
    this.modalService.closeModal()
  }
}
