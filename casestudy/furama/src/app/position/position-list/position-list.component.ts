import { Component, OnInit } from '@angular/core';
import {Position} from "../../modle/position";
@Component({
  selector: 'app-position-list',
  templateUrl: './position-list.component.html',
  styleUrls: ['./position-list.component.css']
})
export class PositionListComponent implements OnInit {
positionList: Position[]= [];
  constructor() { }

  ngOnInit(): void {
  }

}
