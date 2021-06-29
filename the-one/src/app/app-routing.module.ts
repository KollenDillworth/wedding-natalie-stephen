import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsModule } from './details/details.module';
import { HomeModule } from './home/home.module';
import { OurStoryModule } from './our-story/our-story.module';
import { RegistryModule } from './registry/registry.module';
import { TravelModule } from './travel/travel.module';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    HomeModule,
    OurStoryModule,
    DetailsModule,
    TravelModule,
    RegistryModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
