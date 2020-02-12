import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureNewDashboardComponent } from './configure-new-dashboard.component';

describe('ConfigureNewDashboardComponent', () => {
  let component: ConfigureNewDashboardComponent;
  let fixture: ComponentFixture<ConfigureNewDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureNewDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureNewDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
