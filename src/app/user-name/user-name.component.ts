import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CanComponentDeactivate } from '../guards/confirm-deactivate.guard';
import { CarService } from '../services/car.service';
import { Observable, Subscription } from 'rxjs';
import { LapTimeService } from '../services/lap-time.service';

@Component({
  selector: 'app-user-name',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './user-name.component.html',
  styleUrl: './user-name.component.css'
})
export class UserNameComponent implements CanComponentDeactivate , OnInit, OnDestroy, OnChanges {
  userName: string | null = '';
  greeting: string = '';
  cars: Array<{ name: string; option: string }> = [];
  laps: Array<{ name: string; option: string }> = [];
  private subscriptionCW: Subscription = new Subscription();
  private subscriptionLT: Subscription = new Subscription();

  canDeactivate(): boolean | any {
    return confirm('Вы уверены, что хотите покинуть страницу?');
  }

  constructor(private route: ActivatedRoute, private router: Router, private carServise: CarService, private lapTimeService: LapTimeService) {
    console.log('Constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called', changes);
  }

  ngOnInit(): void {
    this.userName = this.route.snapshot.paramMap.get('name');
    this.subscriptionCW.add(this.carServise.cars$.subscribe((cars) => {this.cars = cars}));
    this.subscriptionLT.add(this.lapTimeService.cars$.subscribe((cars) => {this.laps = cars}));
    console.log('ngOnInit called');
  }

  ngOnDestroy()
  {
    this.subscriptionCW.unsubscribe();
    this.subscriptionLT.unsubscribe();
  }

  goToTheCoolWallForm()
  {
    this.router.navigate(['/coolwall']);
  }

  goToLapTimeForm()
  {
    this.router.navigate(['/laptime']);
  }

  sayHello()
  {
    this.greeting = `Hi, ${this.userName}.`;
  }
}
