import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardTasksComponent } from './forward-tasks.component';

describe('ForwardTasksComponent', () => {
  let component: ForwardTasksComponent;
  let fixture: ComponentFixture<ForwardTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForwardTasksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForwardTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
