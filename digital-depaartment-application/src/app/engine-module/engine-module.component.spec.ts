import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineModuleComponent } from './engine-module.component';

describe('EngineModuleComponent', () => {
  let component: EngineModuleComponent;
  let fixture: ComponentFixture<EngineModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EngineModuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EngineModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
