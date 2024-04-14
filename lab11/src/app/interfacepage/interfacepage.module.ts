import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InterfacepageClassPage } from './interfacepage.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { InterfacepageClassPageRoutingModule } from './interfacepage-routing.module';
import { MyHeaderModule } from '../../my-header/my-header.component.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    InterfacepageClassPageRoutingModule,
    MyHeaderModule
  ],
  declarations: [InterfacepageClassPage]
})
export class InterfacepageClassPageModule {}
