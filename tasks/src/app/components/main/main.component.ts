import { AfterContentInit, Component, Output } from '@angular/core';
// import { ModalService } from '../../services/modal.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterContentInit {

  public isText: string;
  @Output() isModal: boolean;
  public isAuth: boolean = true;
  
  public ngAfterContentInit(): void {
    this.isModal = false;
  }
  public setValue(value: string) {
    this.isText = value;
  }
}
