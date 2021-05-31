import { Component,OnInit,AfterViewInit,ChangeDetectorRef,OnDestroy} from '@angular/core';
import {MediaObserver, MediaChange} from '@angular/flex-layout';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'TEMPERATURE CONVERTER';
  public Celsius:number=0.0;
  public Fahrenheit:number=0.0;
  private mediaSub!: Subscription;
  constructor(
    private cdRef: ChangeDetectorRef,
    public mediaObserver:MediaObserver
    ) {

    }
  ngOnInit() {
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (change:MediaChange) => {
        console.log(change.mqAlias);
        console.log(change.mediaQuery);
      }
    );
  }
  ngAfterViewInit() {
    
  }

  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }
}