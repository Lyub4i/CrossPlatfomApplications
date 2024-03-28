import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UniversityPageRoutingModule } from './university-routing.module';

import { UniversityPage } from './university.page';
import { MyUniversityFormModule } from '../../../my-university-form/my-university-form.component.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UniversityPageRoutingModule,
    ReactiveFormsModule,
    MyUniversityFormModule
  ],
  declarations: [UniversityPage],
})
export class UniversityPageModule {}
