import { Component, OnInit } from '@angular/core';
import { Customer } from '../Customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers :Customer[] =[
    {customerNo:1,name:'Nguyen Van A',address:'Thanh Khe',city:'Da Nang',country: 'Viet Nam',state:'mien trung'},
    {customerNo:2,name:'Nguen Van B',address:'Thanh Khe',city:'Da Nang',country: 'Viet Nam',state:'mien trung'},
    {customerNo:3,name:'Nguyen Van c',address:'Thanh Khe',city:'Da Nang',country: 'Viet Nam',state:'mien trung'},
    {customerNo:4,name:'Nguen Van D',address:'Thanh Khe',city:'Da Nang',country: 'Viet Nam',state:'mien trung'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
