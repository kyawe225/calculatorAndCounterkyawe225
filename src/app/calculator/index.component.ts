import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  template: string = "";
  num1: string = "";
  operator: string = "";
  click(event: string) {
    if (this.isOperator(event)) {
      if (this.num1 == "" && this.template != "" && this.template != null) {
        this.num1 = this.template;
        this.template = "";
        this.operator = event;
      }
      else if (this.num1 != "" && this.operator != "") {
        this.operator = event;
      }
    }
    else if (event == "DEL") {
      if (this.operator != "=") {
        this.template = this.template.substring(0, this.template.length - 1);
      } else {
        this.template = "";
        this.operator = "";
      }
    }
    else if (event == "C") {
      this.num1 = "";
      this.template = "";
      this.operator = "";
    }
    else if (event == "=" && this.template != "" && this.operator != "") {
      this.template = this.calculate().toString();
      console.log("equal");
      this.operator = "=";
      this.num1 = "";
    } else {
      if (this.operator == "=") {
        this.template = "";
      }
      this.template += event != "=" ? event : "";
    }
  }
  isOperator(event: string) {
    return event == "+" || event == "-" || event == "*" || event == "/" || event == "%";
  }
  calculate() {
    let total: number = 0;

    if (this.operator != "") {
      if (this.num1.includes(".") || this.template.includes(".")) {
        total = eval(this.num1 + this.operator + this.template);
      }
      else {
        switch (this.operator) {
          case "+":
            total = parseInt(this.num1) + parseInt(this.template);
            break;
          case "-":
            total = parseInt(this.num1) - parseInt(this.template);
            break;
          case "*":
            total = parseInt(this.num1) * parseInt(this.template);
            break;
          case "/":
            total = parseInt(this.num1) / parseInt(this.template);
            break;
          case "%":
            total = parseInt(this.num1) % parseInt(this.template);
            break;
        }
      }
    }
    return total;
  }
}
