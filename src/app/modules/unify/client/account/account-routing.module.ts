import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailComponent } from './components/account-detail/account-detail.component';
import { AccountWorklistComponent } from './components/account-worklist/account-worklist.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'worklist',
    pathMatch: 'full',
  },
  {
    path: 'worklist',
    component: AccountWorklistComponent,
    title: 'Account Worklist',
    data: {
      stateName: 'account',
    },
  },
  {
    path: 'detail/:id',
    component: AccountDetailComponent,
    data: {
      stateName: 'account',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
