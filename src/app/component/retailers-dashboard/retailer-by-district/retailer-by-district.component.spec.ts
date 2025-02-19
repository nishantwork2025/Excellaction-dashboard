import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerByDistrictComponent } from './retailer-by-district.component';

describe('RetailerByDistrictComponent', () => {
  let component: RetailerByDistrictComponent;
  let fixture: ComponentFixture<RetailerByDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetailerByDistrictComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RetailerByDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
