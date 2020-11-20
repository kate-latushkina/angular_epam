import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header-description',
  templateUrl: './header-description.component.html',
  styleUrls: ['./header-description.component.scss']
})
export class HeaderDescriptionComponent implements OnInit {

  public changeClass: boolean = true;
  constructor(private translateService: TranslateService) {}

  public ngOnInit(): void {
  }

  public setLanguage(languageCode: number) {
    this.changeClass = !this.changeClass
    this.translateService.use(environment.locales[languageCode]);
  }

}
