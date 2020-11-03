import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListCoursesComponent } from './components/list-courses/list-courses.component';
// import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  // { path: '', component: LoginComponent},
  { path: 'courses', component: ListCoursesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
