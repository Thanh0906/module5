import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-pipe',
  templateUrl: './test-pipe.component.html',
  styleUrls: ['./test-pipe.component.css']
})
export class TestPipeComponent implements OnInit {
dateValue = '2021-12-02';
textValue = 'HELLO WORLD';
  constructor() { }

  ngOnInit(): void {
  }

}
