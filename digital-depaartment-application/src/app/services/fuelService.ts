import { Injectable } from '@angular/core';
import { Fuel } from '../fuel-module/fuel-module.component';

@Injectable({
  providedIn: 'root'
})
export class FuelService {

  saveFuels(fuels: Fuel[]) {
    localStorage.setItem('fuels', JSON.stringify(fuels));
  }

  getFuels(): Fuel[] {
    const storedData = localStorage.getItem('fuels');
    return storedData ? JSON.parse(storedData) : [];
  }
}
