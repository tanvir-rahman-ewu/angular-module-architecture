import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailComponent } from './components/detail/project-detail.component';
import { ProjectWorklistComponent } from './components/worklist/project-worklist.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'worklist',
    pathMatch: 'full',
  },
  {
    path: 'detail/:id',
    component: ProjectDetailComponent,
  },
  {
    path: 'worklist',
    component: ProjectWorklistComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
