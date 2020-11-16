import { Component, OnInit, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public inputValue: string;
  // @Output() searchText$ = new Subject<string>();
  public searchText$ = new Subject<string>();
  public ngOnInit(): void {
  }

  public search(value: Observable<string>) {
    this.searchText$.next(value);
  }
}
