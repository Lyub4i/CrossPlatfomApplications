import { IonicModule } from '@ionic/angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyUniversityFromComponent } from './my-university-form.component';

@NgModule({
  imports: [ReactiveFormsModule],
  declarations: [MyUniversityFromComponent],
  exports: [MyUniversityFromComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class MyUniversityFormModule {}
