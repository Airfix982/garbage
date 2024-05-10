import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

interface CarReview {
  id: number;
  title: string;
  manufacturer: string;
  description: string;
  type: string;
  rating: string;
  createdDate: Date;
}

@Component({
  selector: 'app-car-review',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './car-review.component.html',
  styleUrls: ['./car-review.component.css']
})
export class CarReviewComponent {
  @ViewChild('form')
  form!: NgForm;
  reviews: CarReview[] = [];

  newReview = {
    title: '',
    manufacturer: '',
    description: '',
    type: '',
    rating: ''
  };
  nextId = 1;

  addReview() {
    const review: CarReview = {
      ...this.newReview,
      id: this.nextId++,
      createdDate: new Date()
    };
    this.reviews.push(review);
    this.newReview = { title: '', manufacturer: '', description: '', type: '', rating: '' }; // Reset form
    console.log(this.reviews);
  }

  updateReview(reviewId: number, newDescription: string)
  {
    let review = this.reviews.find(r => r.id == reviewId);
    if(review)
    {
      review.description = newDescription;
      review.createdDate = new Date();
    }
  }
}