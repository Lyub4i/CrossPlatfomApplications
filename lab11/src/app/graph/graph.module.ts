import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GraphPage } from './graph.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { GraphPageRoutingModule } from './graph-routing.module';

import { MyHeaderModule } from '../../my-header/my-header.component.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    GraphPageRoutingModule,
    MyHeaderModule
  ],
  declarations: [GraphPage]
})
export class GraphPageModule {}
