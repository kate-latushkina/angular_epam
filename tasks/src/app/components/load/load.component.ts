import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss']
})
export class LoadComponent implements OnInit {

  public ngOnInit(): void {
  }
  public getClick(): void {
    console.log('click load button')
  }
}
