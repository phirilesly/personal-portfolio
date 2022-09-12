import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from './education.component';
import { Route, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

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
    MatIconModule,
    RouterModule.forChild(educationRoutes)

  ]
})
export class EducationModule { }
