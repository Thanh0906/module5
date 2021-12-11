import { Component, OnInit } from '@angular/core';
import {EducationDegree} from "../../modle/education-degree";
import {Division} from "../../modle/division";
import {EmployeeService} from "../../services/employee.service";
import {PositionService} from "../../services/position.service";
import {EducationDegreeService} from "../../services/education-degree.service";
import {DivisionService} from "../../services/division.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  employeeForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.pattern('^(NV-)(\\d{4})$')]),
    name: new FormControl('', [Validators.required]),
    dateOfBirth: new FormControl('', [Validators.required, Validators.pattern('^(?:19\\d{2}|20\\d{2})[-/.](?:0[1-9]|1[012])[-/.](?:0[1-9]|[12][0-9]|3[01])$')]),
    idCard: new FormControl('', [Validators.required, Validators.pattern('^([0-9]{9})|([0-9]{12})$')]),
    salary: new FormControl(''),
    phone: new FormControl('', [Validators.required, Validators.pattern('^(0|(\\(84\\)\\+))+([9][0-1][0-9]{7})$')]),
    email: new FormControl('', [Validators.required, Validators.pattern('^(?:^|\\s)[\\w!#$%&\'*+/=?^`{|}~-](\\.?[\\w!#$%&\'*+/=?^`{|}~-]+)*@\\w+[.-]?\\w*\\.[a-zA-Z]{2,3}\\b$')]),
    address: new FormControl('', [Validators.required]),
    position: new FormControl('', [Validators.required]),
    educationDegree: new FormControl('', [Validators.required]),
    division: new FormControl('', [Validators.required])
  });
  id: string;
  positionList: Position[] = [];
  educationDegreeList: EducationDegree[] = [];
  divisionList: Division[] = [];

  constructor(private employeeService: EmployeeService,
              private positionService: PositionService,
              private educationDegreeService: EducationDegreeService,
              private divisionService: DivisionService,
              ) {
  }

  ngOnInit(): void {
    this.getAllPosition();
    this.getAllEducationDegree();
    this.getAllDivision();
  }

  getEmployee(id: string) {
    return this.employeeService.findById(id).subscribe(employee => {
      this.employeeForm.setValue(employee);
    });
  }

  comparePosition(c1: Position, c2: Position): boolean {
    //return c1 && c2 ? c1.id === c2.id : c1 === c2;
    return ;
  }

  compareEducationDegree(c1: EducationDegree, c2: EducationDegree): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  compareDivision(c1: Division, c2: Division): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }


  updateEmployee(id: string) {
    const employee = this.employeeForm.value;
    this.employeeService.update(id, employee).subscribe(() => {
    }, error => {
      console.log(error);
    });
  }

  getAllPosition() {
    this.positionService.getAll().subscribe(positionList => {
      this.positionList = positionList;
    });
  }

  getAllEducationDegree() {
    this.educationDegreeService.getAll().subscribe(educationDegreeList => {
      this.educationDegreeList = educationDegreeList;
    });
  }

  getAllDivision() {
    this.divisionService.getAll().subscribe(divisionList => {
      this.divisionList = divisionList;
    });
  }

  get name() {
    return this.employeeForm.get('name');
  }

  get dateOfBirth() {
    return this.employeeForm.get('dateOfBirth');
  }

  get idCard() {
    return this.employeeForm.get('idCard');
  }

  get salary() {
    return this.employeeForm.get('salary');
  }

  get phone() {
    return this.employeeForm.get('phone');
  }

  get email() {
    return this.employeeForm.get('email');
  }

  get address() {
    return this.employeeForm.get('address');
  }

  get position() {
    return this.employeeForm.get('position');
  }

  get educationDegree() {
    return this.employeeForm.get('educationDegree');
  }

  get division() {
    return this.employeeForm.get('division');
  }

}
