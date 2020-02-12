import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewTabletDashboardComponent } from './preview-tablet-dashboard.component';

describe('PreviewTabletDashboardComponent', () => {
  let component: PreviewTabletDashboardComponent;
  let fixture: ComponentFixture<PreviewTabletDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewTabletDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewTabletDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
