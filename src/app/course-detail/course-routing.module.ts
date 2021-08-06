import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { CourseDetailComponent } from './course-detail.component';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { RemoveComponent } from './remove/remove.component';
import { UpdateComponent } from './update/update.component';

// Auth Gurad = Resitate a page open all

const routes: Routes = [
  {
    path:'', component: CourseDetailComponent, children: [
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
    RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class  CourseRoutingModule { }
