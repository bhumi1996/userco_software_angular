import { Component } from '@angular/core';
import { CarouselModule,OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  
  customOptions: OwlOptions = {
       loop:true,
        nav:true,
        dots:false,
        smartSpeed:1000,
        margin:10,
        navText:['PREV','NEXT'],
        responsive:{
            0:{
                nav:false,
                items:1,
                margin:0
             },
             768:{
               items:2
              },
              1140:{
                items:3,
                center:true,
            
              }
        }
  }

}
