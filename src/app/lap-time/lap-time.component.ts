import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LapTimeService } from '../services/lap-time.service';

@Component({
  selector: 'app-lap-time',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lap-time.component.html',
  styleUrls: ['./lap-time.component.css']
})
export class LapTimeComponent {
  brand: string = '';
  model: string = '';
  lapTime: string = '';

  constructor(private lapService: LapTimeService, private router: Router) {}

  formatLapTime(value: string) {
    let numbers = value.replace(/\D/g, '');  
    numbers = numbers.substring(0, 5);
  
    if (numbers.length === 0) {
      this.lapTime = '';
    } else if (numbers.length <= 1) {
      this.lapTime = numbers;
    } else if (numbers.length <= 3) {
      this.lapTime = `${numbers.substring(0, 1)}:${numbers.substring(1)}`;
    } else {
      this.lapTime = `${numbers.substring(0, 1)}:${numbers.substring(1, 3)}.${numbers.substring(3)}`;
    }
  }
  
  

  onSubmit()
  {
    const lap = {
      name: `${this.brand} ${this.model}`,
      option: this.lapTime
    };
    this.lapService.addCar(lap);
    this.router.navigate(['/user', "James"]);
  }
}
