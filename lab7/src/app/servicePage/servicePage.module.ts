import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServicePagePage } from './servicePage.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ServicePagePageRoutingModule } from './servicePage-routing.module';
import { MyHeaderModule } from '../../my-header/my-header.component.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ServicePagePageRoutingModule,
    MyHeaderModule
  ],
  declarations: [ServicePagePage]
})
export class ServicePagePageModule {}
