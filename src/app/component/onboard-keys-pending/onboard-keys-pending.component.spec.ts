import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardKeysPendingComponent } from './onboard-keys-pending.component';

describe('OnboardKeysPendingComponent', () => {
  let component: OnboardKeysPendingComponent;
  let fixture: ComponentFixture<OnboardKeysPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardKeysPendingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnboardKeysPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
