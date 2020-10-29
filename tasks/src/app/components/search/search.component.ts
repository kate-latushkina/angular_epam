import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  // public inputValue: string;
  @Output() isTextEvent = new EventEmitter<boolean>();
  public ngOnInit(): void {
  }

  public getInputText(value: boolean) {
    if (!value) {
      this.isTextEvent.emit(value);
    }
    console.log(value)
  }

}
