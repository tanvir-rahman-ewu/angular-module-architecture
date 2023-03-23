import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountWorklistComponent } from './components/account-worklist/account-worklist.component';
import { AccountDetailComponent } from './components/account-detail/account-detail.component';

@NgModule({
  declarations: [AccountWorklistComponent, AccountDetailComponent],
  imports: [CommonModule, AccountRoutingModule],
})
export class AccountModule {
  constructor() {
    console.log('Account Module loaded.');
  }
}
