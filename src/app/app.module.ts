import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CelToFahPipe } from './cel-to-fah.pipe';
import { FahToCelPipe } from './fah-to-cel.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment'
import {FlexLayoutModule} from '@angular/flex-layout';
import { CAndFComponent } from './c-and-f/c-and-f.component';
import { CAndKComponent } from './c-and-k/c-and-k.component';
import { AppRoutingModule} from './app-routing.module';
import { CelToKelPipe } from './cel-to-kel.pipe';
import { KelToCelPipe } from './kel-to-cel.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CelToFahPipe,
    FahToCelPipe,
    CAndFComponent,
    CAndKComponent,
    CelToKelPipe,
    KelToCelPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
