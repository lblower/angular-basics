import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { UpdateComponent } from './update/update.component';
import { RemoveComponent } from './remove/remove.component';
import { CreateComponent } from './create/create.component';
import { CourseDetailComponent } from './course-detail.component';
import { DetailComponent } from './detail/detail.component';
import { CourseRoutingModule } from './course-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CourseDetailComponent, UpdateComponent, RemoveComponent, CreateComponent,DetailComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule
  ],
})
export class CourseDetailModule { }
