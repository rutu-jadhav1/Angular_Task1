import { Routes } from '@angular/router';
import { ObjectComponent } from './component/object-component/object-component';
import { VariableComponent } from './component/variable-component/variable-component';
import { NgForComponent } from './component/StructuralDirectives/ng-for-component/ng-for-component';
import { NgIfComponent } from './component/StructuralDirectives/ng-if-component/ng-if-component';
import { FunctionComponent } from './component/function-component/function-component';
import { UserProfileComponent } from './component/Data-Binding/user-profile-component/user-profile-component';
import { App } from './app';

export const routes: Routes = [
     {
        path: '',
        redirectTo: '/object',
        pathMatch: 'full'
    },
    {
        path: 'app',
        component: App
    },
    {
        path: 'object',
        component: ObjectComponent
    },
    {
        path: 'variable',
        component: VariableComponent
    },
    {
        path: 'ngFor',
        component: NgForComponent
    },
    {
        path: 'ngIf',
        component: NgIfComponent 
    },
    {
        path: 'function',
        component: FunctionComponent
    },
    {
        path:'userProfile',
        component: UserProfileComponent
    }

];
