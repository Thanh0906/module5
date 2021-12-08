import { Component, OnInit } from '@angular/core';
import {Division} from "../../modle/division";

@Component({
  selector: 'app-division-list',
  templateUrl: './division-list.component.html',
  styleUrls: ['./division-list.component.css']
})
export class DivisionListComponent implements OnInit {
divisionList:  Division[]=[]
  constructor() { }

  ngOnInit(): void {
  }

}
