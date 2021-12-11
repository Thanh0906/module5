import {Component, OnInit} from '@angular/core';
import {Services} from "../../modle/services";
import {ServicesService} from "../../services/services.service";


@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  serviceList: Services[] = []

  constructor(private service: ServicesService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {

  }
}
