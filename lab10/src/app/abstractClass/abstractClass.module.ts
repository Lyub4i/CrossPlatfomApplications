import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AbstractClassPage } from './abstractClass.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AbstractClassPageRoutingModule } from './abstractClass-routing.module';
import { MyHeaderModule } from '../../my-header/my-header.component.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    AbstractClassPageRoutingModule,
    MyHeaderModule
  ],
  declarations: [AbstractClassPage]
})
export class AbstractClassPageModule {}
