import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'graph',
    loadChildren: () => import('./graph/graph.module').then(m => m.GraphPageModule)
  },
  {
    path: 'file',
    loadChildren: () => import('./file/file.module').then(m => m.FilePageModule)
  },
  {
    path: 'abstract',
    loadChildren: () => import('./abstractClass/abstractClass.module').then(m => m.AbstractClassPageModule)
  },
  {
    path: 'interfacepage',
    loadChildren: () => import('./interfacepage/interfacepage.module').then(m => m.InterfacepageClassPageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./servicePage/servicePage.module').then(m => m.ServicePagePageModule)
  },
  {
    path: 'university',
    loadChildren: () => import('./university/university/university.module').then( m => m.UniversityPageModule)
  },
  {
    path: 'observablepage',
    loadChildren: () => import('./observablepage/observablepage.module').then( m => m.ObservablepagePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
