import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudoperationRoutingModule } from './crudoperation-routing.module';
import { CrudoperationComponent } from './crudoperation.component';


@NgModule({
  declarations: [CrudoperationComponent],
  imports: [
    CommonModule,
    CrudoperationRoutingModule,
  ]
})
export class CrudoperationModule { }
