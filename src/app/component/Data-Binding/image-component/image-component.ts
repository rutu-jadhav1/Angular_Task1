import { Component } from '@angular/core';

@Component({
  selector: 'app-image-component',
  imports: [],
  templateUrl: './image-component.html',
  styleUrl: './image-component.css'
})
export class ImageComponent {
  /* Create an Angular component called ImageComponent.
     Inside the component, define a property called imageUrl with the value of a  placeholder image URL.
     Use property binding to dynamically bind the imageUrl to the source of an   element in the template.
  */
   imageURL : string = "https://wallpaperaccess.com/full/1108337.jpg";
   imageMessage : string = "Royal Enfield Bike Image";
}
