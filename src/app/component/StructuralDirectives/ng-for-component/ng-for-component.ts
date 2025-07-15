import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-for-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-for-component.html',
  styleUrl: './ng-for-component.css'
})
export class NgForComponent {
  //A. Create City Array Bind that to Dropdown
  cities: string[] = ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata'];

  /* B. Take one TextBox, button and dropdown
        on add btn click Entered City Should be added to dropdown option
        after adding city - textbox Should be empty
        Show count of Added Cities in P Tag.
  */
  newCity: string = '';
  cityCount: number = 0;
  citiesList: string[] = ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata'];
  addCity() {
    if (this.newCity.trim()) {
      this.citiesList.push(this.newCity);
      this.cityCount = this.citiesList.length;
      this.newCity = ''; 
    }
  }


}
