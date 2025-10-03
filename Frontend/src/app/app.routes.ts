import { Routes } from '@angular/router';
import { EmployeeList } from './components/employee-list/employee-list';
import { AddEmployee } from './components/add-employee/add-employee';
import { EditEmployee } from './components/edit-employee/edit-employee';

export const routes: Routes = [
  { path: '', component: EmployeeList, pathMatch: 'full' },  
  { path: 'add', component: AddEmployee },
  { path: 'edit/:id', component: EditEmployee },
  { path: '**', redirectTo: '' }   
];
