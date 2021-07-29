import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';

import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CreateComponent } from './course-detail/create/create.component';
import { UpdateComponent } from './course-detail/update/update.component';
import { RemoveComponent } from './course-detail/remove/remove.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path:'login', component: LoginComponent
  },
  {
    path:'register', component: RegisterComponent
  },
  {
    path:'contact', component: ContactUsComponent
  },
  {
    path:'course', component: CourseDetailComponent, children: [
      {
        path:'create', component: CreateComponent
      },
      {
        path:'up', component: UpdateComponent
      },
      {
        path:'detail/:id', component: RemoveComponent // : represent a dynamic property
      },
      {
        path:"*", component: NotFoundComponent
      }

    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class  AppRoutingModule { }
