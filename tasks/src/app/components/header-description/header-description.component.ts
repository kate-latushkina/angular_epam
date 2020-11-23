import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header-description',
  templateUrl: './header-description.component.html',
  styleUrls: ['./header-description.component.scss']
})
export class HeaderDescriptionComponent {

  public changeClass: boolean = true;
  constructor(private translateService: TranslateService) {}

  public setLanguage(languageCode: number) {
    this.changeClass = !this.changeClass
    this.translateService.use(environment.locales[languageCode]);
  }

}
