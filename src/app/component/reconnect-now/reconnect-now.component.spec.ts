import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconnectNowComponent } from './reconnect-now.component';

describe('ReconnectNowComponent', () => {
  let component: ReconnectNowComponent;
  let fixture: ComponentFixture<ReconnectNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReconnectNowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReconnectNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
