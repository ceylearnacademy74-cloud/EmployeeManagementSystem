import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';        
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';       
import { EmployeeService, Employee } from '../../services/employee';

@Component({
  selector: 'app-add-employee',
  standalone: true,                                 
  imports: [FormsModule, CommonModule],               
  templateUrl: './add-employee.html',
  styleUrls: ['./add-employee.css']
})
export class AddEmployee {
  employee: Employee = { id: 0, name: '', email: '', department: '', salary: 0 };

  constructor(private service: EmployeeService, private router: Router) {}

  saveEmployee() {
    this.service.addEmployee(this.employee).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
