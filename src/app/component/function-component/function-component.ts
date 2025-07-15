import { Component } from '@angular/core';

@Component({
  selector: 'app-function-component',
  imports: [],
  templateUrl: './function-component.html',
  styleUrl: './function-component.css'
})
export class FunctionComponent {
  constructor() {
    this.firstFunction();
    this.square(4);
  }
  // A.Create a simple function with name firstFunction(). and stored the value in console ('This is my first function')and call the function firstFunction().
  firstFunction() {
    console.log('This is my first function');
    console.log();
  }

  //B.Create a function with name square().The function square() takes one parameter and parameter name is num.Return the parameter (num) multiplied by itself. Example like (num * num) and call the function square() and store the result in console.
  square(num: number): number {
    const result = num * num;
    console.log(`Square of ${num} is: ${result}`);
    console.log();
    return result;
  }
}
