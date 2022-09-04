import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Route, RouterModule } from '@angular/router';
import {NgxTypedJsModule} from 'ngx-typed-js';

const homeRoutes: Route[] = [
  {
      path     : '',
      component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NgxTypedJsModule,
    RouterModule.forChild(homeRoutes)
  ]
})
export class HomeModule { }
