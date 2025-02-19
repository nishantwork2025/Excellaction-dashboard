import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeRetailersComponent } from './welcome-retailers.component';

describe('WelcomeRetailersComponent', () => {
  let component: WelcomeRetailersComponent;
  let fixture: ComponentFixture<WelcomeRetailersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeRetailersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WelcomeRetailersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
