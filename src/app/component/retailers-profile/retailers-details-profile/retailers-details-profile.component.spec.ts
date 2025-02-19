import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailersDetailsProfileComponent } from './retailers-details-profile.component';

describe('RetailersDetailsProfileComponent', () => {
  let component: RetailersDetailsProfileComponent;
  let fixture: ComponentFixture<RetailersDetailsProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetailersDetailsProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RetailersDetailsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
