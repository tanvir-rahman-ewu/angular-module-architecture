import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountWorklistComponent } from './account-worklist.component';

describe('AccountWorklistComponent', () => {
  let component: AccountWorklistComponent;
  let fixture: ComponentFixture<AccountWorklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountWorklistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountWorklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
