import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbstractClassPage } from './abstractClass.page';

const routes: Routes = [
  {
    path: '',
    component: AbstractClassPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbstractClassPageRoutingModule {}
