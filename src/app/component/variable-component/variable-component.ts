import { Component } from '@angular/core';

@Component({
  selector: 'app-variable-component',
  imports: [],
  templateUrl: './variable-component.html',
  styleUrl: './variable-component.css'
})
export class VariableComponent {
constructor() {
    this.displayFullName();
    this.displayStudentDetails();
    this.displayAddress();
   }

   // A
  firstName:string = 'Rutuja';
  middleName:string = 'Kishor';
  lastName:string = 'Jadhav';
  fullName:string = `${this.firstName} ${this.middleName} ${this.lastName}`;
  
  displayFullName(){
    console.log(`FullName : ${this.fullName}`);
     console.log();
  }

  // B Student Details
  name: string = 'Rutuja Jadhav';
  contactNo: string = '1234567890';
  fatherName: string = 'Kishor Jadhav';
  motherName: string = 'Vandana Jadhav';
  class: string = 'IT';
  rollNo: number = 21;

  displayStudentDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Contact No: ${this.contactNo}`);
    console.log(`Father's Name: ${this.fatherName}`);
    console.log(`Mother's Name: ${this.motherName}`);
    console.log(`Class: ${this.class}`);
    console.log(`Roll No: ${this.rollNo}`);
     console.log();
  }
 
  // C
  address:string = 'Sangramnagar, Akluj';
  city:string = 'Akluj';
  state:string = 'Maharashtra';
  pincode:string = '413101';

  displayAddress() {
    console.log(`Address: ${this.address}`);
    console.log(`City: ${this.city}`);
     console.log();
  }
}
