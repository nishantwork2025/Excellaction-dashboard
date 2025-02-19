import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailersProfileComponent } from './retailers-profile.component';

describe('RetailersProfileComponent', () => {
  let component: RetailersProfileComponent;
  let fixture: ComponentFixture<RetailersProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetailersProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RetailersProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
