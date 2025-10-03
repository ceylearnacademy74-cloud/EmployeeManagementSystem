import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { EmployeeService, Employee } from '../../services/employee';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.html',
  styleUrls: ['./employee-list.css']
})
export class EmployeeList implements OnInit {
  employees: Employee[] = [];

  constructor(private service: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    console.log('EmployeeList loaded ✅'); 
    this.loadEmployees();
  }

  loadEmployees() {
    this.service.getEmployees().subscribe(data => {
      console.log('API data:', data); 
      this.employees = data;
    });
  }

  goToAdd() {
    this.router.navigate(['/add']);
  }

  goToEdit(id: number) {
    this.router.navigate(['/edit', id]);
  }

  deleteEmployee(id: number) {
    this.service.deleteEmployee(id).subscribe(() => this.loadEmployees());
  }
}
