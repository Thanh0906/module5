import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  output: any;
  first: number;
  second: number;
  operator = '+';

  onFirstChange(event) {
    this.first = Number(event.target.value);
  }

  onSecondChange(event) {
    this.second = Number(event.target.value);
  }

  onSelectChange(event) {
    this.operator = event.target.value;
  }

  calculate() {
    switch (this.operator) {
      case '+':
        this.output =this.first + this.second;
        break;
      case '-':
        this.output =this.first - this.second;
        break;
      case '*':
        this.output =this.first * this.second;
        break;
      case '/':
        if (this.second ===0){
          this.output = 'Không thể chia cho 0';
        }else {
          this.output =this.first /this.second;
        }
        break;
      default:
        throw new Error('Không có phép tính')

    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
