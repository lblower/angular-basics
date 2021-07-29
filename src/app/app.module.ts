import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { UpdateComponent } from './course-detail/update/update.component';
import { RemoveComponent } from './course-detail/remove/remove.component';
import { CreateComponent } from './course-detail/create/create.component';
import { NotFoundComponent } from './not-found/not-found.component';

// this is a config file - @ngodule represnt configuration or linking of components

@NgModule({
  declarations: [ // component comes here ,  directive
    AppComponent, LoginComponent, RegisterComponent, ContactUsComponent,
     CourseDetailComponent, UpdateComponent, RemoveComponent, CreateComponent, NotFoundComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
