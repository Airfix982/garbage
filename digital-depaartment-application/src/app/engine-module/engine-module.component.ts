import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

export interface Engine {
  id: number;
  power: string;
  max_engine_speed: string;
  emission_standart: string;
  stroke: string;
  boost_pressure: string;
  createdDate: Date;
}

@Component({
  selector: 'app-engine-module',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './engine-module.component.html',
  styleUrl: './engine-module.component.css'
})
export class EngineModuleComponent {
  @ViewChild('form')
  form!: NgForm;
  engines: Engine[] = [];

  newEngine = {
    power: '',
    max_engine_speed: '',
    emission_standart: '',
    stroke: '',
    boost_pressure: ''
  };
  nextId = 1;

  ngOnInit() {
    this.loadEngines();
  }

  loadEngines() {
    const storedEngines = localStorage.getItem('engines');
    if (storedEngines) {
      this.engines = JSON.parse(storedEngines);
      if (this.engines.length > 0) {
        this.nextId = this.engines[this.engines.length - 1].id + 1;
      }
    }
  }

  saveEngines() {
    localStorage.setItem('engines', JSON.stringify(this.engines));
  }

  addEngine()
  {
    const engine: Engine = {
      ...this.newEngine,
      id: this.nextId++,
      createdDate: new Date()
    };
    this.engines.push(engine);
    this.saveEngines();
    this.newEngine = {power: '',max_engine_speed: '',emission_standart: '',stroke: '',boost_pressure: ''};
  }

  updateEngine(engineId: number, newPower: string, newMES: string, newES: string, newStroke: string, newBoostPresssure: string)
  {
    let engine = this.engines.find(e => e.id == engineId);
    if(engine)
    {
      engine.power = newPower;
      engine.max_engine_speed = newMES;
      engine.emission_standart = newES;
      engine.stroke = newStroke;
      engine.boost_pressure = newBoostPresssure;
      engine.createdDate = new Date();
    }
    this.saveEngines();
  }
}
