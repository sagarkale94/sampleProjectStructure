import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewDesktopDashboardComponent } from './preview-desktop-dashboard.component';

describe('PreviewDesktopDashboardComponent', () => {
  let component: PreviewDesktopDashboardComponent;
  let fixture: ComponentFixture<PreviewDesktopDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewDesktopDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewDesktopDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
