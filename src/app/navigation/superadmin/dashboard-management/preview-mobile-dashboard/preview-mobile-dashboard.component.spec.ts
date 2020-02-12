import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewMobileDashboardComponent } from './preview-mobile-dashboard.component';

describe('PreviewMobileDashboardComponent', () => {
  let component: PreviewMobileDashboardComponent;
  let fixture: ComponentFixture<PreviewMobileDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewMobileDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewMobileDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
