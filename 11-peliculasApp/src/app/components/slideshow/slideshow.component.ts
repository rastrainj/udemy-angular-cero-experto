import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  @Input() movies: Movie[];

  constructor() {}

  ngOnInit(): void {
    console.log(this.movies);
  }

  ngAfterViewInit(): void {
    const mySwiper = new Swiper('.swiper-container', {
      loop: true,
    });
  }
}
