import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './calculator/index.component';
import { CounterComponent } from './counter/counter.component';

let routes:Routes=[
  {
    path:"count",
    component:CounterComponent
  },
  {
    path:"calculator",
    component:IndexComponent
  },
  {
    path:"**",
    redirectTo:"count"
  }
];

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class ApproutingModule { }
