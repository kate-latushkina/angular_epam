import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Modal } from '../modal';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  public isOpen: BehaviorSubject<Modal> = new BehaviorSubject<Modal>(new Modal())
  public openModal(closeFn: () => void) {
    const mod = new Modal()
    mod.isOpen = true;
    mod.closeFn = closeFn;
    this.isOpen.next(mod);
  }
  public closeModal() {
    const mod = new Modal()
    mod.isOpen = false;
    this.isOpen.next(mod);
  }
}
