import { Component, OnInit } from '@angular/core';
import {EducationDegree} from "../../modle/education-degree";

@Component({
  selector: 'app-education-degree-list',
  templateUrl: './education-degree-list.component.html',
  styleUrls: ['./education-degree-list.component.css']
})
export class EducationDegreeListComponent implements OnInit {
  educationDegreeList : EducationDegree[] =[];
  constructor() { }

  ngOnInit(): void {
  }

}
