import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-c-and-f',
  template: `
<section class="celsius-section">
   <div>
    <h2>Celsius to Fahrenheit</h2>
    <div><h2>Celsius:<input style="width: 150px;" type="number" name="Celsius" [(ngModel)]="Celsius">&#8451;</h2></div>
    <div><h2>Fahrenheit={{Celsius|celToFah|number:".2"}}&#8457;</h2></div>
   </div>
</section>

<section class="fahrenheit-section">
    <div>
    <h2>Fahrenheit to Celsius</h2>
     <div><h2>Fahrenheit:<input style="width: 150px;" type="number" name="Fahrenheit" [(ngModel)]="Fahrenheit">&#8457;</h2></div>   
    <div><h2>Celsius={{Fahrenheit|fahToCel|number:".2"}}&#8451;</h2></div>
    </div>
</section>
  `,
  styleUrls: ['./c-and-f.component.css']
})
export class CAndFComponent implements OnInit {
  public Celsius:number=0.0;
  public Fahrenheit:number=0.0;
  constructor() { }

  ngOnInit(): void {
  }

}
