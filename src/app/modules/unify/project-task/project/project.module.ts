import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectWorklistComponent } from './components/worklist/project-worklist.component';
import { ProjectDetailComponent } from './components/detail/project-detail.component';

@NgModule({
  declarations: [ProjectWorklistComponent, ProjectDetailComponent],
  imports: [CommonModule, ProjectRoutingModule],
})
export class ProjectModule {
  constructor() {
    console.log('project module loaded.');
  }
}
