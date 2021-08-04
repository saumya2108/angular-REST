import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeComponent } from './employee/employee.component';
import { Employee } from '../Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>("http://localhost:8080/employees");
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>("http://localhost:8080/employees/" + id);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>("http://localhost:8080/employees", employee);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>("http://localhost:8080/employees/" + employee.id, employee);
  }

  deleteEmployee(id: number): Observable<Employee> {
    return this.http.delete<Employee>("http://localhost:8080/employees/" + id);
  }
}
