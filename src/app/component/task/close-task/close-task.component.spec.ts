import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseTaskComponent } from './close-task.component';

describe('CloseTaskComponent', () => {
  let component: CloseTaskComponent;
  let fixture: ComponentFixture<CloseTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloseTaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CloseTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
