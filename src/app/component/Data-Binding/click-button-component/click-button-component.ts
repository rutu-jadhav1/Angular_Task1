import { Component } from '@angular/core';

@Component({
  selector: 'app-click-button-component',
  imports: [],
  templateUrl: './click-button-component.html',
  styleUrl: './click-button-component.css'
})
export class ClickButtonComponent {
  /*. Create a new Angular component named ClickButton.
      Add a button to the component's template.
      Use event binding to trigger an alert message when the button is clicked.
  */
  showAlert() {
    alert('Button clicked!');
  }
}
