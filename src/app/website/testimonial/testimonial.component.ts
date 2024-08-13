import { Component, Input } from '@angular/core';
import { CarouselModule,OwlOptions } from 'ngx-owl-carousel-o';
import { Testimonial } from '../../model/testimonial';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css'
})
export class TestimonialComponent {

  customOptions: OwlOptions = {

    loop:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    margin:10,
    nav:false,
    dots:true,
    smartSpeed:1000,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
  }
  @Input() testimonial:Testimonial[]=[];

}
