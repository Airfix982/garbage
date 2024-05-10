import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LapTimeService {
  private carsSubject = new BehaviorSubject<Array<{ name: string; option: string }>>([]);
  cars$ = this.carsSubject.asObservable();

  addCar(car: { name: string; option: string }) {
    const currentCars = this.carsSubject.value;
    this.carsSubject.next([...currentCars, car]);
  }

  constructor() { }
}
