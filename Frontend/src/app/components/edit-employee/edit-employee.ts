import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';          
import { CommonModule } from '@angular/common';        
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService, Employee } from '../../services/employee';

@Component({
  selector: 'app-edit-employee',
  standalone: true,                                    
  imports: [FormsModule, CommonModule],                
  templateUrl: './edit-employee.html',
  styleUrls: ['./edit-employee.css']
})
export class EditEmployee implements OnInit {
  id!: number;
  employee: Employee = { id: 0, name: '', email: '', department: '', salary: 0 };

  constructor(
    private service: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getEmployee(this.id).subscribe(data => this.employee = data);
  }

  updateEmployee() {
    this.service.updateEmployee(this.id, this.employee).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}

