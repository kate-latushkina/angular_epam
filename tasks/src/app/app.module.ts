import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderDescriptionComponent } from './components/header-description/header-description.component';
import { MainComponent } from './components/main/main.component';
import { ListCoursesComponent } from './components/list-courses/list-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderDescriptionComponent,
    MainComponent,
    FooterComponent,
    ListCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
