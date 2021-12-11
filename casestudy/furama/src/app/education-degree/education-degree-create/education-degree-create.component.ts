import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-education-degree-create',
  templateUrl: './education-degree-create.component.html',
  styleUrls: ['./education-degree-create.component.css']
})
export class EducationDegreeCreateComponent implements OnInit {
educationDegreeForm = new FormGroup({
  id: new FormControl('',[Validators.required]),
  name: new FormControl('',[Validators.required])
});
  constructor() { }

  ngOnInit(): void {
  }

  saveEducation() {

  }
}
