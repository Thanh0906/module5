import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

employeeForm = new FormGroup({
  id : new FormControl(''),
  name : new FormControl(''),
  birthday : new FormControl(''),
  idCard: new FormControl(''),
  salary : new FormControl(''),
  phone: new FormControl(''),
  email : new FormControl(''),
  address: new FormControl(''),
  positionId : new FormControl(''),
  divisionId: new FormControl('')

})
  constructor() { }

  ngOnInit(): void {
  }

  saveEmployee() {

  }
}
