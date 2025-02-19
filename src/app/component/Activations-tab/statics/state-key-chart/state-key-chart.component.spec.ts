import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateKeyChartComponent } from './state-key-chart.component';

describe('StateKeyChartComponent', () => {
  let component: StateKeyChartComponent;
  let fixture: ComponentFixture<StateKeyChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateKeyChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StateKeyChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
