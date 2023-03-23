import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectWorklistComponent } from './project-worklist.component';

describe('ProjectWorklistComponent', () => {
  let component: ProjectWorklistComponent;
  let fixture: ComponentFixture<ProjectWorklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectWorklistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectWorklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
