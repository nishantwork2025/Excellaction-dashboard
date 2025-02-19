import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTicketChartComponent } from './all-ticket-chart.component';

describe('AllTicketChartComponent', () => {
  let component: AllTicketChartComponent;
  let fixture: ComponentFixture<AllTicketChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllTicketChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllTicketChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
