import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work.component';
import { Route, RouterModule } from '@angular/router';

const workRoutes: Route[] = [
  {
      path     : '',
      component: WorkComponent
  }
];



@NgModule({
  declarations: [
    WorkComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(workRoutes)

  ]
})
export class WorkModule { }
