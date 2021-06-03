import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListCoursesComponent } from './components/list-courses/list-courses.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

const appRoutes: Routes =[
  { path: 'main', component: HomeComponent},
  { path: '', component: LoginComponent},
  { path: 'courses', component: ListCoursesComponent},
  { path: '**', component: ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
