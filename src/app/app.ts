import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VariableComponent } from './component/variable-component/variable-component';
import { ObjectComponent } from './component/object-component/object-component';
import { ArrayComponent } from './component/array-component/array-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,VariableComponent, ObjectComponent,ArrayComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   
 
}
