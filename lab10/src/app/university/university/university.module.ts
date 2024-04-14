import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UniversityPageRoutingModule } from './university-routing.module';

import { UniversityPage } from './university.page';
import { MyUniversityFormModule } from '../../../my-university-form/my-university-form.component.module'
import { FacultyFormComponent } from 'src/app/faculty-form/faculty-form.component';
import { MyHeaderModule } from 'src/my-header/my-header.component.module';
import { FacultyDetailComponent } from 'src/app/faculty-detail/faculty-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UniversityPageRoutingModule,
    ReactiveFormsModule,
    MyUniversityFormModule,
    MyHeaderModule
  ],
  declarations: [UniversityPage, FacultyFormComponent, FacultyDetailComponent],
})
export class UniversityPageModule {}
