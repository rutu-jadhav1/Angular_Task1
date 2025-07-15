import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile-component',
  imports: [],
  templateUrl: './user-profile-component.html',
  styleUrl: './user-profile-component.css'
})
export class UserProfileComponent {
 // Interpolation task 
  /* Create an Angular component named UserProfile.
     Define properties for name and age in the component's TypeScript file.
     Use property binding in the component's template to display the name and age.
  */
  name: string = 'Akshay Kumar';
  age: number = 50;
}
