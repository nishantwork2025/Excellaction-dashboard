import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailersDashboardComponent } from './retailers-dashboard.component';

describe('RetailersDashboardComponent', () => {
  let component: RetailersDashboardComponent;
  let fixture: ComponentFixture<RetailersDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetailersDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RetailersDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
