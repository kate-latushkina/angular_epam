import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public inputValue: string;
  @Output() isTextEvent = new EventEmitter<string>();
  public ngOnInit(): void {
  }

  public getInputText(value: string) {
    this.isTextEvent.emit(value);
    this.inputValue = '';
  }

}
