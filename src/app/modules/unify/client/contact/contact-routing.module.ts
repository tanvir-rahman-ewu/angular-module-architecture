import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { ContactWorklistComponent } from './components/contact-worklist/contact-worklist.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'worklist',
    pathMatch: 'full',
  },
  {
    path: 'worklist',
    component: ContactWorklistComponent,
  },
  {
    path: 'detail/:id',
    component: ContactDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactRoutingModule {}
