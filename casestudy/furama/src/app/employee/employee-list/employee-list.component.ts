import { Component, OnInit } from '@angular/core';
import {Employee} from "../../modle/employee";
import {EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: Employee[] = [];

  constructor(private employeeService: EmployeeService,
              ) {
  }

  ngOnInit(): void {
    this.getAllEmployee();
  }
  getAllEmployee() {
    this.employeeService.getAll().subscribe(employeeList => {
      this.employeeList = employeeList;
    });
  }

}
