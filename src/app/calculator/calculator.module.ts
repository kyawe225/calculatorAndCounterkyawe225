import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { IndexComponent } from './index.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    IndexComponent
  ]
})
export class CalculatorModule { }
