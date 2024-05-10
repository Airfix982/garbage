import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheCoolWallComponent } from './the-cool-wall.component';

describe('TheCoolWallComponent', () => {
  let component: TheCoolWallComponent;
  let fixture: ComponentFixture<TheCoolWallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheCoolWallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheCoolWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
