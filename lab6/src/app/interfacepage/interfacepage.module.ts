import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InterfacepageClassPage } from './interfacepage.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { InterfacepageClassPageRoutingModule } from './interfacepage-routing.module';

import {MyHeaderComponent} from "../../my-header/my-header.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    InterfacepageClassPageRoutingModule
  ],
  declarations: [InterfacepageClassPage, MyHeaderComponent]
})
export class InterfacepageClassPageModule {}
