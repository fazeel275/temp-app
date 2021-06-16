import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-and-k',
  template: `
  <section class="cel-section">
   <div>
    <h2>Celsius to Kelvin</h2>
    <div><h2>Celsius:<input style="width: 150px;" type="number" name="Celsius" [(ngModel)]="Celsius">&#8451;</h2></div>
    <div><h2>Kelvin={{Celsius|celToKel|number:".2"}}&#8490;</h2></div>
   </div>
</section>

<section class="kel-section">
    <div>
    <h2>Kelvin to Celsius</h2>
     <div><h2>Kelvin:<input style="width: 150px;" type="number" name="Kelvin" [(ngModel)]="Kelvin">&#8490;</h2></div>   
    <div><h2>Celsius={{Kelvin|kelToCel|number:".2"}}&#8451;</h2></div>
    </div>
</section>
  `,
  styleUrls: ['./c-and-k.component.css']
})
export class CAndKComponent implements OnInit {
  public Celsius:number=0.0;
  public Kelvin:number=0.0;
  constructor() { }

  ngOnInit(): void {
  }

}
