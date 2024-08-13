import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SliderComponent } from '../slider/slider.component';
import { AboutComponent } from '../about/about.component';
import { MilestonComponent } from '../mileston/mileston.component';
import { ServiceComponent } from '../service/service.component';
import { BlogComponent } from "../blog/blog.component";
import { TestimonialComponent } from '../testimonial/testimonial.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ActivatedRoute } from '@angular/router';
import { Testimonial } from '../../model/testimonial';
import { Faq } from '../../model/faq';
import { Service } from '../../model/service';
import { FaqComponent } from '../faq/faq.component';
import { Article, ArticleDto } from '../../model/article';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    SliderComponent,
    AboutComponent,
    MilestonComponent,
    ServiceComponent,
    BlogComponent,
    TestimonialComponent,
    PortfolioComponent,
    FaqComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(private route:ActivatedRoute,){

  }
  articleDto:ArticleDto|undefined;
  testimonials:Testimonial[]=[];
  faqList:Faq[]=[];
  servces:Service[]=[];
  articles:Article[]=[];

  ngOnInit(): void {
    this.route.data.subscribe(({testimonial,faqDto,serviceDto,articleDto})=>{
       this.testimonials=testimonial.list;
       this.faqList=faqDto.list;
       this.servces=serviceDto.list;
       this.articles=articleDto.list;
  
    });

    }
  }


