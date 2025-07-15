import { Component } from '@angular/core';

@Component({
  selector: 'app-array-component',
  imports: [],
  templateUrl: './array-component.html',
  styleUrl: './array-component.css'
})
export class ArrayComponent {
  constructor() {
    this.displayCities();
  }
  // A.Create an array of Cities Print Length of City Array in console Print 3rd Element from array
  cities: string[] = ['Mumbai', 'Pune', 'Nashik', 'Delhi', 'Bangalore'];

  displayCities() {
    console.log(`Length of City Array: ${this.cities.length}`);
    console.log(`3rd Element from City Array: ${this.cities[2]}`);
    console.log();
  }
}
