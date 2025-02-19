import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfCreatedTaskComponent } from './self-created-task.component';

describe('SelfCreatedTaskComponent', () => {
  let component: SelfCreatedTaskComponent;
  let fixture: ComponentFixture<SelfCreatedTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelfCreatedTaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelfCreatedTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
