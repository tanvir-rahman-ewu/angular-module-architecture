import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactWorklistComponent } from './contact-worklist.component';

describe('ContactWorklistComponent', () => {
  let component: ContactWorklistComponent;
  let fixture: ComponentFixture<ContactWorklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactWorklistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactWorklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
