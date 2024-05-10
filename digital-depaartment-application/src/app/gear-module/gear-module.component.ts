import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

interface gear {
  id: number;
  relaeseBearing: string;
  driven_disc: string;
  clutch_basket: string;
  input_shaft: string;
  shift_fork: string;
  createdDate: Date;
}

@Component({
  selector: 'app-gear-module',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './gear-module.component.html',
  styleUrl: './gear-module.component.css'
})
export class GearModuleComponent {
  @ViewChild('form')
  form!: NgForm;
  gears: gear[] = [];

  newGear = {
    relaeseBearing: '',
    driven_disc: '',
    clutch_basket: '',
    input_shaft: '',
    shift_fork: ''
  };
  nextId = 1;

  addgear()
  {
    const gear: gear = {
      ...this.newGear,
      id: this.nextId++,
      createdDate: new Date()
    };
    this.gears.push(gear);
    this.newGear = {relaeseBearing: '',driven_disc: '',clutch_basket: '',input_shaft: '',shift_fork: ''};
  }

  updategear(gearId: number, newRelaeseBearing: string, newDrivenDisc: string, newClutch_basket: string, newInputShaft: string, newShiftFork: string)
  {
    let gear = this.gears.find(e => e.id == gearId);
    if(gear)
    {
      gear.relaeseBearing = newRelaeseBearing;
      gear.driven_disc = newDrivenDisc;
      gear.clutch_basket = newClutch_basket;
      gear.input_shaft = newInputShaft;
      gear.shift_fork = newShiftFork;
      gear.createdDate = new Date();
    }
  }
}
