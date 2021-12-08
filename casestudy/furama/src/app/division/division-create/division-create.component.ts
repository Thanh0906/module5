import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-division-create',
  templateUrl: './division-create.component.html',
  styleUrls: ['./division-create.component.css']
})
export class DivisionCreateComponent implements OnInit {
divisionForm = new FormGroup({
  id: new FormControl(''),
  name: new FormControl(''),

})
  constructor() { }

  ngOnInit(): void {
  }

  saveDivision() {

  }
}
