import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-template-driven-form-component',
  imports: [FormsModule,NgIf],
  templateUrl: './template-driven-form-component.html',
  styleUrl: './template-driven-form-component.css'
})
export class TemplateDrivenFormComponent {
 userDetails: any;

  addDetails(formValue: any) {
    this.userDetails = formValue;
    console.log(this.userDetails);
  }
}
