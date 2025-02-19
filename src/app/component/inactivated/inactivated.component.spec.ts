import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactivatedComponent } from './inactivated.component';

describe('InactivatedComponent', () => {
  let component: InactivatedComponent;
  let fixture: ComponentFixture<InactivatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InactivatedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InactivatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
