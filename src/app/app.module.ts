import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmployeeComponent } from './employee/employee/employee.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './employee/delete-employee/delete-employee.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    UpdateEmployeeComponent,
    DeleteEmployeeComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
