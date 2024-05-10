import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LapTimeComponent } from './lap-time.component';

describe('LapTimeComponent', () => {
  let component: LapTimeComponent;
  let fixture: ComponentFixture<LapTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LapTimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LapTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
