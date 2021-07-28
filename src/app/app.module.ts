import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqComponent } from './faq/faq.component';
import { ProductsComponent } from './products/products.component';
import {CourseComp} from './course/cousrse.component';
import { BindingCodeComponent } from './binding-code/binding-code.component';
import { HeaderComponent } from './header/header.component';
import { TheoryComponent } from './theory/theory.component';
import { DirectiveDumbCompComponent } from './directive-dumb-comp/directive-dumb-comp.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared.module';
import { SimpleCourseComponent } from './course/simple-course/simple-course.component';
import { AdvanceCourseComponent } from './course/advance-course/advance-course.component';

// this is a config file - @ngodule represnt configuration or linking of components

@NgModule({
  declarations: [ // component comes here ,  directive
    AppComponent,
    FaqComponent,
    ProductsComponent,
    BindingCodeComponent,
    HeaderComponent,
    DirectiveDumbCompComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
