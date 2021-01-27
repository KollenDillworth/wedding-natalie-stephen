import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'the-one';

  public isScreenSmall: boolean | undefined;

  constructor(private bpo: BreakpointObserver, private router: Router){}

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  ngOnInit(): void{
    //gets screen size
    this.bpo.observe([Breakpoints.XSmall]).subscribe(
      (state: BreakpointState) => {
        this.isScreenSmall = state.matches
      });

      //closes side nav only on small screen
      this.router.events.subscribe(() =>{
        if(this.isScreenSmall){
          this.sidenav.close();
        }
      })

  }

}
