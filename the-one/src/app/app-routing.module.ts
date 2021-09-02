import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsModule } from './details/details.module';
import { HomeModule } from './home/home.module';
import { OurStoryModule } from './our-story/our-story.module';
import { RegistryModule } from './registry/registry.module';
import { RsvpModule } from './rsvp/rsvp.module';
import { TravelModule } from './travel/travel.module';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    HomeModule,
    OurStoryModule,
    DetailsModule,
    TravelModule,
    RegistryModule,
    RsvpModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
