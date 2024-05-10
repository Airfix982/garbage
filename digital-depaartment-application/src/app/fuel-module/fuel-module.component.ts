import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

interface Fuel {
  id: number;
  air_cleaner: string;
  throttle_sensor: string;
  fuel_injectors: string;
  fuel_pump: string;
  fuel_filter: string;
  createdDate: Date;
}

@Component({
  selector: 'app-fuel-module',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './fuel-module.component.html',
  styleUrl: './fuel-module.component.css'
})
export class FuelModuleComponent {
  @ViewChild('form')
  form!: NgForm;
  fuels: Fuel[] = [];

  newFuel = {
    air_cleaner: '',
    throttle_sensor: '',
    fuel_injectors: '',
    fuel_pump: '',
    fuel_filter: ''
  };
  nextId = 1;

  addfuel()
  {
    const fuel: Fuel = {
      ...this.newFuel,
      id: this.nextId++,
      createdDate: new Date()
    };
    this.fuels.push(fuel);
    this.newFuel = {air_cleaner: '',throttle_sensor: '',fuel_injectors: '',fuel_pump: '',fuel_filter: ''};
  }

  updatefuel(fuelId: number, new_air_cleaner: string, newThrottleSensor: string, new_fuel_injectors: string, new_fuel_pump: string, new_fuel_filter: string)
  {
    let fuel = this.fuels.find(e => e.id == fuelId);
    if(fuel)
    {
      fuel.air_cleaner = new_air_cleaner;
      fuel.throttle_sensor = newThrottleSensor;
      fuel.fuel_injectors = new_fuel_injectors;
      fuel.fuel_pump = new_fuel_pump;
      fuel.fuel_filter = new_fuel_filter;
      fuel.createdDate = new Date();
    }
  }
}
