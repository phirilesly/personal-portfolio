import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { Route, RouterModule } from '@angular/router';

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
    RouterModule.forChild(aboutRoutes)
  ]
})
export class AboutModule { }
