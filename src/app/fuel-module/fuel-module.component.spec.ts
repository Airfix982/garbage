import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelModuleComponent } from './fuel-module.component';

describe('FuelModuleComponent', () => {
  let component: FuelModuleComponent;
  let fixture: ComponentFixture<FuelModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuelModuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FuelModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
