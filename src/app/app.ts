import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VariableComponent } from './component/variable-component/variable-component';
import { ObjectComponent } from './component/object-component/object-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,VariableComponent, ObjectComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   
 
}
