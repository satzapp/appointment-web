import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueWaitedComponent } from './queue-waited.component';

describe('QueueWaitedComponent', () => {
  let component: QueueWaitedComponent;
  let fixture: ComponentFixture<QueueWaitedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueueWaitedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueWaitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
