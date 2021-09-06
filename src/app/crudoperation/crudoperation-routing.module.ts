import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudoperationComponent } from './crudoperation.component';

const routes: Routes = [{
  path:'', component: CrudoperationComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudoperationRoutingModule { }
