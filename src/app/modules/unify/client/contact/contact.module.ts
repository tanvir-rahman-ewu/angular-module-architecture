import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { ContactWorklistComponent } from './components/contact-worklist/contact-worklist.component';

@NgModule({
  declarations: [ContactDetailComponent, ContactWorklistComponent],
  imports: [CommonModule, ContactRoutingModule],
})
export class ContactModule {
  constructor() {
    console.log('Contact Module Loaded.');
  }
}
