import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { Route, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

const aboutRoutes: Route[] = [
  {
      path     : '',
      component: AboutComponent
  }
];

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule.forChild(aboutRoutes)
  ]
})
export class AboutModule { }
