import { Component, OnInit } from '@angular/core';
import {ContractDetail} from "../../modle/contract-detail";

@Component({
  selector: 'app-contract-detail-list',
  templateUrl: './contract-detail-list.component.html',
  styleUrls: ['./contract-detail-list.component.css']
})
export class ContractDetailListComponent implements OnInit {
contractDetailList : ContractDetail[]=[]
  constructor() { }

  ngOnInit(): void {
  }

}
