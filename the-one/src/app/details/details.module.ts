import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule.forChild([
      {path: 'details', component: DetailsComponent}
    ])
  ]
})
export class DetailsModule { }
