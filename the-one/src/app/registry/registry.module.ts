import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { RegistryComponent } from './registry.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule.forChild([
      {path: 'registry', component: RegistryComponent}
    ])
  ]
})
export class RegistryModule { }
