import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CAndFComponent } from './c-and-f/c-and-f.component';
import { CAndKComponent } from './c-and-k/c-and-k.component';


const routes: Routes= [
  {path: 'CelToFah', component:CAndFComponent},
  {path: 'CelToKel', component:CAndKComponent},
  {path: '**', redirectTo:'CelToFah'}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
