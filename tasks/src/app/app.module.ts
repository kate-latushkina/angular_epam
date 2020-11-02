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
import { TimePipe } from './pipes/list-time.pipe';
import { DateDirective } from './directives/list-date.directive'
import { ListFilterPipe } from './pipes/list-filter.pipe';
import { CourseComponent } from './components/course/course.component';
import { CoursesService } from './services/courses.service';
import { AuthService } from './services/auth.service';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';


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
    HomeComponent,
    TimePipe,
    DateDirective,
    ListFilterPipe,
    CourseComponent,
    ModalWindowComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
  ],
  providers: [
    CoursesService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
