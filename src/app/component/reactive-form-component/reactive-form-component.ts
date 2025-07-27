
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form-component',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './reactive-form-component.html',
  styleUrl: './reactive-form-component.css'
})
export class ReactiveFormComponent {
profileForm = new FormGroup({
  fullName: new FormControl('',[Validators.required]),
  userName: new FormControl('',[Validators.required]),
  email: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]),
  phone: new FormControl('',[Validators.required,Validators.pattern('^[0-9]{10}$')]),
  password: new FormControl('',[Validators.required,Validators.minLength(6)]),
  confirmPassword: new FormControl('',[Validators.required,Validators.minLength(6)])
})

submitData() {
  console.log(this.profileForm.value);
}

get fullName() {
  return this.profileForm.get('fullName');
}
get userName() {
  return this.profileForm.get('userName');
}
get email() {
  return this.profileForm.get('email');
}
get phone() {
  return this.profileForm.get('phone');
}
get password() {
  return this.profileForm.get('password');
}
get confirmPassword() {
  return this.profileForm.get('confirmPassword');
}

}
