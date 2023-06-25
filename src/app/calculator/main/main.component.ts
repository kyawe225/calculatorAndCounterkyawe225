import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  @Output('clickaction') calClick:EventEmitter<string>=new EventEmitter();

  click(value:string){
    console.log('clicked');
    this.calClick.emit(value);
    console.log("emitted");
  }
}
