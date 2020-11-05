import { Component, Input } from '@angular/core';
import { ICourse } from 'src/app/interfaces/course';


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
