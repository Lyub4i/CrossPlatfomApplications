import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UniversityPageRoutingModule } from './university-routing.module';

import { UniversityPage } from './university.page';
import { UniversityFormComponent } from '../../components/university-form/university-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UniversityPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UniversityPage, UniversityFormComponent],
})
export class UniversityPageModule {}
