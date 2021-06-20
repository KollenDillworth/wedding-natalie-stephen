import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material/material.module';
import { TravelComponent } from '../travel/travel.component'

@NgModule({
  declarations: [TravelComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule.forChild([
      {path: 'travel', component: TravelComponent}
    ])
  ]
})
export class TravelModule { }
