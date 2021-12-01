import { Component, OnInit } from '@angular/core';
import {Pet} from '../pet';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  pet: Pet = {
    name: 'Gấu Chó',
    image: 'https://maplestoresvn.com/wp-content/uploads/2020/10/chon-noi-that-tich-hop-cho-nghi-ngoi-cho-pet-maple-store-vn.jpg'
  };
  constructor() { }

  ngOnInit() {
  }

}


