import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilePage } from './file.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { FilePageRoutingModule } from './file-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    FilePageRoutingModule
  ],
  declarations: [FilePage]
})
export class FilePageModule {}
