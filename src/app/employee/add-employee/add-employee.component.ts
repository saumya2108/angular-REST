import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { EmployeeComponent } from '../employee/employee.component';
import { Employee } from 'src/app/Employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  //stylesUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(employee: Employee) {
    this.employeeService.addEmployee(employee).subscribe(data => {
      this.router.navigate(["/employees"]);
    });
  }
  onCancel() {
    this.router.navigate(["/employees"])
  }
}
