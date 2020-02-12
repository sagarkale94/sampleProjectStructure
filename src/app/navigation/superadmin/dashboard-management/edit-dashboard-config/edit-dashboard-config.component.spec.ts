import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDashboardConfigComponent } from './edit-dashboard-config.component';

describe('EditDashboardConfigComponent', () => {
  let component: EditDashboardConfigComponent;
  let fixture: ComponentFixture<EditDashboardConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDashboardConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDashboardConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
