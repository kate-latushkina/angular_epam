import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

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
import { CourseComponent } from './components/course/course.component';
import { CoursesService } from './services/courses.service';
import { AuthService } from './services/auth.service';
import { ModalService } from './services/modal.service';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { LoginComponent } from './components/login/login.component';
import { CourseModalComponent } from './components/course-modal/course-modal.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { TokenInterceptor } from './interceptors/token.interseptor';
import { NgxLoadingModule } from 'ngx-loading';
import { AuthReducer, CourseReducer } from './state/reducers';
import { EffectsModule } from '@ngrx/effects';
import { CourseEffect, AuthEffects } from './state/effects';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';


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
    CourseComponent,
    ModalWindowComponent,
    LoginComponent,
    CourseModalComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({}),
    StoreModule.forRoot({course: CourseReducer, auth: AuthReducer}),
    EffectsModule.forRoot([CourseEffect, AuthEffects]),
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({}),
  ],
  providers: [
    CoursesService,
    AuthService,
    ModalService,
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
