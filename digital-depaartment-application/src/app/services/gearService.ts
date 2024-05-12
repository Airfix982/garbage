import { Injectable } from '@angular/core';
import { gear } from '../gear-module/gear-module.component';

@Injectable({
  providedIn: 'root'
})
export class GearService {
    saveGears(gears: gear[]) {
        localStorage.setItem('gears', JSON.stringify(gears));
      }
    
      getGears(): gear[] {
        const storedData = localStorage.getItem('gears');
        return storedData ? JSON.parse(storedData) : [];
      }
  }
