import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

// this is a config file - @ngodule represnt configuration or linking of components

@NgModule({
  declarations: [ // component comes here ,  directive
    AppComponent,
    ContactUsComponent,
    AboutUsComponent,
    FaqComponent,
    ProductsComponent,
    CourseComp,
    BindingCodeComponent,
    HeaderComponent,
    TheoryComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
