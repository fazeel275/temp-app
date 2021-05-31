import { NgModule } from '@angular/core';
import {MatButtonModule,} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';



const material= [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
];


@NgModule({
  imports: [material],
  exports:[material]
})
export class MaterialModule { }
