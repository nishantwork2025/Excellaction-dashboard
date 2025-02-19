import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnoozersComponent } from './snoozers.component';

describe('SnoozersComponent', () => {
  let component: SnoozersComponent;
  let fixture: ComponentFixture<SnoozersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnoozersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnoozersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
