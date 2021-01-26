import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurStoryComponent } from './our-story.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [OurStoryComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild([
      {path: 'our-story', component: OurStoryComponent}
    ])
  ]
})
export class OurStoryModule { }
