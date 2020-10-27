import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderDescriptionComponent } from './components/header-description/header-description.component';
import { MainComponent } from './components/main/main.component';
import { ListCoursesComponent } from './components/list-courses/list-courses.component';
import { SearchComponent } from './components/search/search.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { LoadComponent } from './components/load/load.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderDescriptionComponent,
    MainComponent,
    FooterComponent,
    ListCoursesComponent,
    SearchComponent,
    AddCourseComponent,
    LoadComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
