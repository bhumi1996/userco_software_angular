import { Component } from '@angular/core';
import { CarouselModule,OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  customOptions: OwlOptions = {
     loop:true,
     margin:0,
     nav:true,
     dots:false,
     items:1,
     smartSpeed:1000,
     navText:['PREV','NEXT'],
     responsive:{
         0:{
            nav:false,
         },
         768:{
             nav:true,
          },
     }
}


}
