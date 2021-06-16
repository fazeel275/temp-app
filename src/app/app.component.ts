import { Component,OnInit,OnDestroy} from '@angular/core';
import {MediaObserver, MediaChange} from '@angular/flex-layout';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'TEMPERATURE CONVERTER';
  // public Celsius:number=0.0;
  // public Fahrenheit:number=0.0;
   mediaSub: Subscription = new Subscription;
   deviceXs!: boolean;
  constructor(
    public mediaObserver:MediaObserver
    ) {

    }
  ngOnInit() {
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result:MediaChange) => {
        console.log(result.mqAlias);
        this.deviceXs = result.mqAlias ==='xs' ? true:false;
      }
      );
  }
  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }
}