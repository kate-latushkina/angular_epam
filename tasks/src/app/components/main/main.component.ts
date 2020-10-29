import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public isText: boolean;
  public ngOnInit(): void {
  }
  public setValue(value: boolean) {
    this.isText = value;
  }
}
