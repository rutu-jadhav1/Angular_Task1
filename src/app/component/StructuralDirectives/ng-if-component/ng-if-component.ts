import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-ng-if-component',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './ng-if-component.html',
  styleUrl: './ng-if-component.css'
})
export class NgIfComponent {
  /* A.Create 2 Radio Button for male & female
     If male selected Show "You Have selected Male"
     If feMale selected Show "You Have selected Female"
  */
  selectedGender: string = '';

  // B. Take 2 textBox if we enter same value in both textbox hide div else show
  firstValue: string = '';
  secondValue: string = '';

}
