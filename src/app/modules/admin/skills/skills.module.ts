import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { Route, RouterModule } from '@angular/router';

const skillsRoutes: Route[] = [
  {
      path     : '',
      component: SkillsComponent
  }
];


@NgModule({
  declarations: [
    SkillsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(skillsRoutes)

  ]
})
export class SkillsModule { }
