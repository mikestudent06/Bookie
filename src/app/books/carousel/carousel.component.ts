import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  currentIndex = 0;
  @Input() images: string[] = [];

  // Variables to handle carousel slide animation
  translateValue = 0;
  slideWidth = 100 / this.images.length;

  ngOnInit(): void {
    setInterval(() => {
      this.slideRight();
    }, 3000);
  }

  // Function to move the carousel slide to the left
  slideLeft() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.translateValue += this.slideWidth;
  }

  // Function to move the carousel slide to the right
  slideRight() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.translateValue -= this.slideWidth;
  }
}
