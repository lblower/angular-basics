import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule   } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

// import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AppRoutingModule } from './app-routing.module';

import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from './shared/shared.module';
import { CarComponent } from './car/car.component';
import { Engine } from './car/engine';
import { LoggerService } from './shared/logger.service';

// this is a config file - @ngodule represnt configuration or linking of components

@NgModule({
  declarations: [ // component comes here ,  directive , pipe comes
    AppComponent, LoginComponent, RegisterComponent, ContactUsComponent,
    NotFoundComponent,
    CarComponent
  ],
  imports: [ // modules
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [{provide:Engine,useFactory: () => {
    new Engine("BMW ENgine Type")
  }},
  {provide: 'uniqueToken' , useValue: 'I am Dependency injected Environment thing'},
  {provide: 'uniqueFunc' , useValue: () => {
    console.error(' I used in 30 components', this);
  }},

  // {provide: LoggerService, useClass: LoggerService},
  // LoggerService


],
  bootstrap: [AppComponent]
})
export class AppModule { }
