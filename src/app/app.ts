import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { VariableComponent } from './component/variable-component/variable-component';
import { ObjectComponent } from './component/object-component/object-component';
import { ArrayComponent } from './component/array-component/array-component';
import { FunctionComponent } from './component/function-component/function-component';
import { UserProfileComponent } from './component/Data-Binding/user-profile-component/user-profile-component';
import { ImageComponent } from './component/Data-Binding/image-component/image-component';
import { ClickButtonComponent } from './component/Data-Binding/click-button-component/click-button-component';
import { TwoWayBindingComponent } from './component/Data-Binding/two-way-binding-component/two-way-binding-component';
import { NgIfComponent } from './component/StructuralDirectives/ng-if-component/ng-if-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,VariableComponent, ObjectComponent,ArrayComponent, FunctionComponent, UserProfileComponent, 
            ImageComponent, ClickButtonComponent, TwoWayBindingComponent, NgIfComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
   
 
}
