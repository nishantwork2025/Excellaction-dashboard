import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivationsDataComponent } from './activations-data.component';

describe('ActivationsDataComponent', () => {
  let component: ActivationsDataComponent;
  let fixture: ComponentFixture<ActivationsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivationsDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivationsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
