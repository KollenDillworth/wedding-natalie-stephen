import { animate, AnimationBuilder, AnimationFactory, AnimationPlayer, style } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RestaurantModel } from '../models/restaurant-model';
import { americanRestuarantData, asianRestuarantData, restuarantData } from '../models/restuarant-data';
@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {

  restaurants: RestaurantModel = restuarantData;
  americanRestaurants: RestaurantModel = americanRestuarantData;
  asianRestaurants: RestaurantModel = asianRestuarantData;

  private currentSlide = 0;
  private currentSlideSm = 0;
  private currentSlideA = 0;
  private currentSlideAs = 0;

  @ViewChild('carousel')
  private carousel!: ElementRef<any>;
  private player!: AnimationPlayer;

  @ViewChild('carouselSm')
  private carouselSm!: ElementRef<any>;
  private playerSm!: AnimationPlayer;




  @ViewChild('carouselA')
  private carouselA!: ElementRef<any>;
  private playerA!: AnimationPlayer;




  @ViewChild('carouselAs')
  private carouselAs!: ElementRef<any>;
  private playerAs!: AnimationPlayer;
  



  constructor(private builder: AnimationBuilder) { }

  ngOnInit(): void {
  }

  
  next(){
    if(this.currentSlide + 1 === 2) return;
      this.currentSlide = (this.currentSlide + 1) % this.restaurants.restaurants.length;
      
      const offset = this.currentSlide * 630;

      const myAnimation : AnimationFactory = this.builder.build([
        animate('350ms ease-in', style({transform: `translateX(-${offset}px)`}))
      ]);

      this.player = myAnimation.create(this.carousel.nativeElement);
      this.player.play();
  }

  prev(){
    if(this.currentSlide + 1 === 0 || this.currentSlide === 0) return;
    this.currentSlide = ((this.currentSlide - 1) % this.restaurants.restaurants.length) % this.restaurants.restaurants.length;
    
    const offset = this.currentSlide * 630;

    const myAnimation : AnimationFactory = this.builder.build([
      animate('350ms ease-in', style({transform: `translateX(-${offset}px)`}))
    ]);

    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }

  nextSm(){
    if(this.currentSlideSm + 1 === this.restaurants.restaurants.length) return;
      this.currentSlideSm = (this.currentSlideSm + 1) % this.restaurants.restaurants.length;
      
      const offset = this.currentSlideSm * 315;

      const myAnimation : AnimationFactory = this.builder.build([
        animate('350ms ease-in', style({transform: `translateX(-${offset}px)`}))
      ]);

      this.playerSm = myAnimation.create(this.carouselSm.nativeElement);
      this.playerSm.play();
  }

  prevSm(){
    if(this.currentSlideSm + 1 === 0 || this.currentSlideSm === 0) return;
    this.currentSlideSm = ((this.currentSlideSm - 1) % this.restaurants.restaurants.length) % this.restaurants.restaurants.length;
    
    const offset = this.currentSlideSm * 315;

    const myAnimation : AnimationFactory = this.builder.build([
      animate('350ms ease-in', style({transform: `translateX(-${offset}px)`}))
    ]);

    this.playerSm = myAnimation.create(this.carouselSm.nativeElement);
    this.playerSm.play();
  }







  nextA(){
    if(this.currentSlideA + 1 === 4) return;
      this.currentSlideA = (this.currentSlideA + 1) % this.americanRestaurants.restaurants.length;
      
      const offset = this.currentSlideA * 630;

      const myAnimation : AnimationFactory = this.builder.build([
        animate('350ms ease-in', style({transform: `translateX(-${offset}px)`}))
      ]);

      this.playerA = myAnimation.create(this.carouselA.nativeElement);
      this.playerA.play();
  }


  prevA(){
    if(this.currentSlideA + 1 === 0 || this.currentSlideA === 0) return;
    this.currentSlideA = ((this.currentSlideA - 1) % this.americanRestaurants.restaurants.length) % this.americanRestaurants.restaurants.length;
    
    const offset = this.currentSlideA * 630;

    const myAnimation : AnimationFactory = this.builder.build([
      animate('350ms ease-in', style({transform: `translateX(-${offset}px)`}))
    ]);

    this.playerA = myAnimation.create(this.carouselA.nativeElement);
    this.playerA.play();
  }




  nextAs(){
    if(this.currentSlideAs + 1 === 2) return;
      this.currentSlideAs = (this.currentSlideAs + 1) % this.asianRestaurants.restaurants.length;
      
      const offset = this.currentSlideAs * 630;

      const myAnimation : AnimationFactory = this.builder.build([
        animate('350ms ease-in', style({transform: `translateX(-${offset}px)`}))
      ]);

      this.playerAs = myAnimation.create(this.carouselAs.nativeElement);
      this.playerAs.play();
  }


  prevAs(){
    if(this.currentSlideAs + 1 === 0 || this.currentSlideAs === 0) return;
    this.currentSlideAs = ((this.currentSlideAs - 1) % this.asianRestaurants.restaurants.length) % this.asianRestaurants.restaurants.length;
    
    const offset = this.currentSlideAs * 630;

    const myAnimation : AnimationFactory = this.builder.build([
      animate('350ms ease-in', style({transform: `translateX(-${offset}px)`}))
    ]);

    this.playerAs = myAnimation.create(this.carouselAs.nativeElement);
    this.playerAs.play();
  }

}
