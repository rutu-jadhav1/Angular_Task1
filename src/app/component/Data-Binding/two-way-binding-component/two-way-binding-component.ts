import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding-component',
  imports: [FormsModule],
  templateUrl: './two-way-binding-component.html',
  styleUrl: './two-way-binding-component.css'
})
export class TwoWayBindingComponent {
  /* Create a new Angular component named TwoWayBinding.
     Add a text input field to the component's template.
     Use two-way data binding to update the userInput property as the user types.
  */
  userInput: string = '';
}
