import { Component } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  public isText: string;

  public setValue(value: string) {
    this.isText = value;
  }
}
