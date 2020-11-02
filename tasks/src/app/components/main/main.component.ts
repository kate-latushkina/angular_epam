import { AfterContentInit, Component, Output } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterContentInit {

  public isText: string;
  @Output() isModal: boolean;
  public ngAfterContentInit(): void {
    this.isModal = false;
  }
  public setValue(value: string) {
    this.isText = value;
  }
}
