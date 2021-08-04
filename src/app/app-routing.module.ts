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
import { DetailComponent } from './course-detail/detail/detail.component';

// Lazy Loading - i don't need a course related code till user login
// reacharge
// insusrace
// stamnetnment

// Auth Gurad = Resitate a page open all

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
        path:'update', component: UpdateComponent
      },
      {
        path:'detail/:course/all', component: DetailComponent // : represent a dynamic property
      },
      {
        path:'remove/:id', component: RemoveComponent // : represent a dynamic property
      },
      {
        path: '',
        // component: CreateComponent
        pathMatch:'full',
        redirectTo: 'create'
      },
      {
        path:"**", component: NotFoundComponent
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
