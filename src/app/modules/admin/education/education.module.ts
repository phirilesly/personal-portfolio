import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from './education.component';
import { Route, RouterModule } from '@angular/router';

const educationRoutes: Route[] = [
  {
      path     : '',
      component: EducationComponent
  }
];

@NgModule({
  declarations: [
    EducationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(educationRoutes)

  ]
})
export class EducationModule { }
