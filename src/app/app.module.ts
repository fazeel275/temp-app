import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CelToFahPipe } from './cel-to-fah.pipe';
import { FahToCelPipe } from './fah-to-cel.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    CelToFahPipe,
    FahToCelPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }