import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CreateComponent } from './course-detail/create/create.component';
import { UpdateComponent } from './course-detail/update/update.component';
import { RemoveComponent } from './course-detail/remove/remove.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailComponent } from './course-detail/detail/detail.component';
import { CourseDetailModule } from './course-detail/course-detail.module';

// Lazy Loading - i don't need a course related code till user login
// reacharge
// insusrace
// stamnetnment

// Auth Gurad = Resitate a page open all

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'contact',
    component: ContactUsComponent,
  },
  {
    path: 'course',
    loadChildren: () =>
      import('./course-detail/course-detail.module').then(
        (m) => m.CourseDetailModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
