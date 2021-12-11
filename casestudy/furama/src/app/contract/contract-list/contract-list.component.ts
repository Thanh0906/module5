import { Component, OnInit } from '@angular/core';
import {Contract} from "../../modle/contract";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
contractList : Contract[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
