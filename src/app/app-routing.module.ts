import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CourseComp } from './course/cousrse.component';
import { TheoryComponent } from './theory/theory.component';
import { SimpleCourseComponent } from './course/simple-course/simple-course.component';
import { AdvanceCourseComponent } from './course/advance-course/advance-course.component';

const routes: Routes = [
  {path:'course', component: CourseComp,
children:[{path:'simple', component: SimpleCourseComponent},{path:'advance', component: AdvanceCourseComponent},

{path:'s', component: SimpleCourseComponent}]},

  {path:'about', component: AboutUsComponent},
  {path:'contact', component: ContactUsComponent},
  {path:'theory', component: TheoryComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class  AppRoutingModule { }
