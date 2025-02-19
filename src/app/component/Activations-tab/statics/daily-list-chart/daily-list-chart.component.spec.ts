import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyListChartComponent } from './daily-list-chart.component';

describe('DailyListChartComponent', () => {
  let component: DailyListChartComponent;
  let fixture: ComponentFixture<DailyListChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyListChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DailyListChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
