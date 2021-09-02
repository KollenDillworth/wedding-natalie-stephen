import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { RsvpComponent } from './rsvp.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule.forChild([
      {path: 'rsvp', component: RsvpComponent}
    ])
  ]
})
export class RsvpModule { }
