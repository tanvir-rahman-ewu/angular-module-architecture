import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientModule } from './client/client.module';
import { ProjectTaskModule } from './project-task/project-task.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ClientModule, ProjectTaskModule],
})
export class UnifyModule {
  constructor() {
    console.log('Unify module loaded.');
  }
}
