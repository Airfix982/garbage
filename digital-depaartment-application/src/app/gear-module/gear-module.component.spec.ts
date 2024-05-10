import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GearModuleComponent } from './gear-module.component';

describe('GearModuleComponent', () => {
  let component: GearModuleComponent;
  let fixture: ComponentFixture<GearModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GearModuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GearModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
