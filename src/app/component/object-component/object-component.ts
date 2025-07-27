import { Component } from '@angular/core';

@Component({
  selector: 'app-object-component',
 imports: [],
  standalone: true,
  templateUrl: './object-component.html',
  styleUrl: './object-component.css'
})
export class ObjectComponent {
 constructor() {
    this.productDetails();
    this.schoolDetails();
    this. updateEmail();
    this.updatedSchoolDetails();
  }

  

  //A. Create a Object to store Product information Fields will be ProductName, Category, Price, Discount Print ProductName & Price in console
 
  product: {
    ProductName: string;
    Category: string;
    Price: number;
    Discount: string;
  } = {
    ProductName: 'Samsung Galaxy M14',
    Category: 'Electronics',
    Price: 13499,
    Discount: '10%'
  };

  productDetails() {
    console.log(`Product Name: ${this.product.ProductName}`);
    console.log(`Price : ${this.product.Price}`);
     console.log();
  }

  // B. Create a Object to store Train Ticket information Fields will be TrainName, TrainNo, NoOfPassinger, From, To, DateOfJourney
      /*  Print whole Information in P tag like below
          Traine Name: Vidarbah Express
          Traine No: 12135
          No Of Passinger : 3
          From Location: Nagpur
          To Location: Mumbai
          Date Of Journey: 08-04-2023 05.00 PM */

  trainTicket: {
    TrainName: string;
    TrainNo: number;
    NoOfPassengers: number;
    From: string;
    To: string;
    DateOfJourney: string;
  } = {
    TrainName: 'Deccan Express',
    TrainNo: 11023,
    NoOfPassengers: 2,
    From: 'Pune',
    To: 'Mumbai',
    DateOfJourney: '2023-10-15 03.15 PM'
  };

  // C. Create a Object to Hold Information of School Fields will be SchoolName, PrincipleName, ContactNo, Address Print whole Object in console after that add one more Field SchoolEmail with some email again print updated object

  schoolInfo: {
    SchoolName: string;
    PrincipalName: string;
    ContactNo: number;
    Address: string;
    email: string;
  } = {
    SchoolName: 'ABC High School',
    PrincipalName: 'Mr. John Doe',
    ContactNo: 9876543210,
    Address: '123 Main St, City, State, ZIP',
    email: ''
  }

   schoolDetails() {
    console.log(`School Name: ${this.schoolInfo.SchoolName}`);
    console.log(`Principal Name: ${this.schoolInfo.PrincipalName}`);
    console.log(`Contact No: ${this.schoolInfo.ContactNo}`);
    console.log(`Address: ${this.schoolInfo.Address}`);
    console.log();
  } 

  updateEmail() {
    this.schoolInfo.email = 'john@gmail.com';
  }

  updatedSchoolDetails() {
    console.log(`School Name: ${this.schoolInfo.SchoolName}`);
    console.log(`Principal Name: ${this.schoolInfo.PrincipalName}`);
    console.log(`Contact No: ${this.schoolInfo.ContactNo}`);
    console.log(`Address: ${this.schoolInfo.Address}`);
    console.log(`Email: ${this.schoolInfo.email}`);
     console.log();
  }
}
