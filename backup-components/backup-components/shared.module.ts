import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CourseComp } from './course/cousrse.component';
import { TheoryComponent } from './theory/theory.component';
import { SimpleCourseComponent } from './course/simple-course/simple-course.component';
import { AdvanceCourseComponent } from './course/advance-course/advance-course.component';
import { AppRoutingModule } from './app-routing-backup.module';


@NgModule({
  imports:[CommonModule, AppRoutingModule],
  declarations:[CourseComp,AboutUsComponent,ContactUsComponent,TheoryComponent,    SimpleCourseComponent,
    AdvanceCourseComponent],
  exports:[CourseComp,AboutUsComponent,ContactUsComponent,TheoryComponent ,  SimpleCourseComponent,
    AdvanceCourseComponent,AppRoutingModule],
})
export class SharedModule {

}
