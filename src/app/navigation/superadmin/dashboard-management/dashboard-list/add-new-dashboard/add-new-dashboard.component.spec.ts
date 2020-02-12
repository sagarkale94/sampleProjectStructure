import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewDashboardComponent } from './add-new-dashboard.component';

describe('AddNewDashboardComponent', () => {
  let component: AddNewDashboardComponent;
  let fixture: ComponentFixture<AddNewDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
