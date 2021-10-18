import { animate, AnimationBuilder, AnimationFactory, AnimationPlayer, style } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { placesData } from '../models/places-data';
import { PlacesModel } from '../models/places-model';
import { RestaurantModel } from '../models/restaurant-model';
import { americanRestuarantData, asianRestuarantData, healthyRestuarantData, italianRestuarantData, mexSeaRestuarantData, restuarantData } from '../models/restuarant-data';
@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {

  restaurants: RestaurantModel = restuarantData;
  americanRestaurants: RestaurantModel = americanRestuarantData;
  asianRestaurants: RestaurantModel = asianRestuarantData;
  italianRestaurants: RestaurantModel = italianRestuarantData;
  mexSeaRestaurants: RestaurantModel = mexSeaRestuarantData;
  healthyRestaurants: RestaurantModel = healthyRestuarantData;

  places: PlacesModel = placesData;

  private currentSlide = 0;
  private currentSlideSm = 0;

  private currentSlideA = 0;
  private currentSlideASm = 0;

  private currentSlideAs = 0;
  private currentSlideAsSm = 0;

  private currentSlideItSm = 0;

  private currentSlideMexSm = 0;

  private currentSlideHealthySm = 0;

  @ViewChild('carousel')
  private carousel!: ElementRef<any>;
  private player!: AnimationPlayer;

  @ViewChild('carouselSm')
  private carouselSm!: ElementRef<any>;
  private playerSm!: AnimationPlayer;

  @ViewChild('carouselA')
  private carouselA!: ElementRef<any>;
  private playerA!: AnimationPlayer;

  @ViewChild('carouselASM')
  private carouselASM!: ElementRef<any>;
  private playerASM!: AnimationPlayer;

  @ViewChild('carouselAs')
  private carouselAs!: ElementRef<any>;
  private playerAs!: AnimationPlayer;
  
  @ViewChild('carouselAsSm')
  private carouselAsSm!: ElementRef<any>;
  private playerAsSm!: AnimationPlayer;
  
  @ViewChild('carouselItSm')
  private carouselItSm!: ElementRef<any>;
  private playerItSm!: AnimationPlayer;
  
  @ViewChild('carouselMexSm')
  private carouselMexSm!: ElementRef<any>;
  private playerMexSm!: AnimationPlayer;

  @ViewChild('carouselHealthySm')
  private carouselHealthySm!: ElementRef<any>;
  private playerHealthySm!: AnimationPlayer;



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

  nextAsM(){
    if(this.currentSlideASm + 1 === this.americanRestaurants.restaurants.length) return;
      this.currentSlideASm = (this.currentSlideASm + 1) % this.americanRestaurants.restaurants.length;
      
      const offset = this.currentSlideASm * 315;

      const myAnimation : AnimationFactory = this.builder.build([
        animate('350ms ease-in', style({transform: `translateX(-${offset}px)`}))
      ]);

      this.playerASM = myAnimation.create(this.carouselASM.nativeElement);
      this.playerASM.play();
  }


  prevAsM(){
    if(this.currentSlideASm + 1 === 0 || this.currentSlideASm === 0) return;
    this.currentSlideASm = ((this.currentSlideASm - 1) % this.americanRestaurants.restaurants.length) % this.americanRestaurants.restaurants.length;
    
    const offset = this.currentSlideASm * 315;

    const myAnimation : AnimationFactory = this.builder.build([
      animate('350ms ease-in', style({transform: `translateX(-${offset}px)`}))
    ]);

    this.playerASM = myAnimation.create(this.carouselASM.nativeElement);
    this.playerASM.play();
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

  nextAsSm(){
    if(this.currentSlideAsSm + 1 === this.asianRestaurants.restaurants.length) return;
      this.currentSlideAsSm = (this.currentSlideAsSm + 1) % this.asianRestaurants.restaurants.length;
      
      const offset = this.currentSlideAsSm * 315;

      const myAnimation : AnimationFactory = this.builder.build([
        animate('350ms ease-in', style({transform: `translateX(-${offset}px)`}))
      ]);

      this.playerAsSm = myAnimation.create(this.carouselAsSm.nativeElement);
      this.playerAsSm.play();
  }


  prevAsSm(){
    if(this.currentSlideAsSm + 1 === 0 || this.currentSlideAsSm === 0) return;
    this.currentSlideAsSm = ((this.currentSlideAsSm - 1) % this.asianRestaurants.restaurants.length) % this.asianRestaurants.restaurants.length;
    
    const offset = this.currentSlideAsSm * 315;

    const myAnimation : AnimationFactory = this.builder.build([
      animate('350ms ease-in', style({transform: `translateX(-${offset}px)`}))
    ]);

    this.playerAsSm = myAnimation.create(this.carouselAsSm.nativeElement);
    this.playerAsSm.play();
  }


  nextItSm(){
    if(this.currentSlideItSm + 1 === this.italianRestaurants.restaurants.length) return;
      this.currentSlideItSm = (this.currentSlideItSm + 1) % this.italianRestaurants.restaurants.length;
      
      const offset = this.currentSlideItSm * 315;

      const myAnimation : AnimationFactory = this.builder.build([
        animate('350ms ease-in', style({transform: `translateX(-${offset}px)`}))
      ]);

      this.playerItSm = myAnimation.create(this.carouselItSm.nativeElement);
      this.playerItSm.play();
  }


  prevItSm(){
    if(this.currentSlideItSm + 1 === 0 || this.currentSlideItSm === 0) return;
    this.currentSlideItSm = ((this.currentSlideItSm - 1) % this.italianRestaurants.restaurants.length) % this.italianRestaurants.restaurants.length;
    
    const offset = this.currentSlideItSm * 315;

    const myAnimation : AnimationFactory = this.builder.build([
      animate('350ms ease-in', style({transform: `translateX(-${offset}px)`}))
    ]);

    this.playerItSm = myAnimation.create(this.carouselItSm.nativeElement);
    this.playerItSm.play();
  }

  nextMexSm(){
    if(this.currentSlideMexSm + 1 === this.mexSeaRestaurants.restaurants.length) return;
      this.currentSlideMexSm = (this.currentSlideMexSm + 1) % this.mexSeaRestaurants.restaurants.length;
      
      const offset = this.currentSlideMexSm * 315;

      const myAnimation : AnimationFactory = this.builder.build([
        animate('350ms ease-in', style({transform: `translateX(-${offset}px)`}))
      ]);

      this.playerMexSm = myAnimation.create(this.carouselMexSm.nativeElement);
      this.playerMexSm.play();
  }


  prevMexSm(){
    if(this.currentSlideMexSm + 1 === 0 || this.currentSlideMexSm === 0) return;
    this.currentSlideMexSm = ((this.currentSlideMexSm - 1) % this.mexSeaRestaurants.restaurants.length) % this.mexSeaRestaurants.restaurants.length;
    
    const offset = this.currentSlideMexSm * 315;

    const myAnimation : AnimationFactory = this.builder.build([
      animate('350ms ease-in', style({transform: `translateX(-${offset}px)`}))
    ]);

    this.playerMexSm = myAnimation.create(this.carouselMexSm.nativeElement);
    this.playerMexSm.play();
  }

  nextHealthySm(){
    if(this.currentSlideHealthySm + 1 === this.mexSeaRestaurants.restaurants.length) return;
      this.currentSlideHealthySm = (this.currentSlideHealthySm + 1) % this.healthyRestaurants.restaurants.length;
      
      const offset = this.currentSlideHealthySm * 315;

      const myAnimation : AnimationFactory = this.builder.build([
        animate('350ms ease-in', style({transform: `translateX(-${offset}px)`}))
      ]);

      this.playerHealthySm = myAnimation.create(this.carouselHealthySm.nativeElement);
      this.playerHealthySm.play();
  }


  prevHealthySm(){
    if(this.currentSlideHealthySm + 1 === 0 || this.currentSlideHealthySm === 0) return;
    this.currentSlideHealthySm = ((this.currentSlideHealthySm - 1) % this.healthyRestaurants.restaurants.length) % this.healthyRestaurants.restaurants.length;
    
    const offset = this.currentSlideHealthySm * 315;

    const myAnimation : AnimationFactory = this.builder.build([
      animate('350ms ease-in', style({transform: `translateX(-${offset}px)`}))
    ]);

    this.playerHealthySm = myAnimation.create(this.carouselHealthySm.nativeElement);
    this.playerHealthySm.play();
  }

}
