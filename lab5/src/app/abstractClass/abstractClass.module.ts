import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AbstractClassPage } from './abstractClass.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AbstractClassPageRoutingModule } from './abstractClass-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    AbstractClassPageRoutingModule
  ],
  declarations: [AbstractClassPage]
})
export class AbstractClassPageModule {}
