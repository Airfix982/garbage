import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-the-cool-wall',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './the-cool-wall.component.html',
  styleUrl: './the-cool-wall.component.css'
})
export class TheCoolWallComponent {
  carForm: FormGroup;

  constructor(private carService: CarService, private router: Router) {
    this.carForm = new FormGroup({
      brand: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      coolness: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (this.carForm.valid) {
      if ( this.carForm.value.brand.toLowerCase() === "toyota" )
      {
        this.carForm.value.coolness = "Garbage";
      }
      const car = {
        name: `${this.carForm.value.brand} ${this.carForm.value.model}`,
        option: this.carForm.value.coolness
      };
      this.carService.addCar(car);
      this.router.navigate(['/user', "John"]); 
    }
  }
}
