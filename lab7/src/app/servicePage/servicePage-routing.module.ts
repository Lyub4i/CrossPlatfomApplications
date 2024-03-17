import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicePagePage } from './servicePage.page';

const routes: Routes = [
  {
    path: '',
    component: ServicePagePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicePagePageRoutingModule {}
