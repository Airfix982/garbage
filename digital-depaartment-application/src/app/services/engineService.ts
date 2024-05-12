import { Injectable } from '@angular/core';
import { Engine } from '../engine-module/engine-module.component';

@Injectable({
  providedIn: 'root'
})
export class EngineService {
    saveEngines(engines: Engine[]) {
        localStorage.setItem('engines', JSON.stringify(engines));
      }
    
      getEngines(): Engine[] {
        const storedData = localStorage.getItem('engines');
        return storedData ? JSON.parse(storedData) : [];
      }
  }
