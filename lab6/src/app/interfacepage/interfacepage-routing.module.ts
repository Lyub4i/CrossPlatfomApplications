import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterfacepageClassPage } from './interfacepage.page';

const routes: Routes = [
  {
    path: '',
    component: InterfacepageClassPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterfacepageClassPageRoutingModule {}
