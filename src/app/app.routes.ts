import { Routes } from '@angular/router';
import { HomeComponent } from './website/home/home.component';
import { FAqResolver, ServiceResolver, TestimonialResolver } from './service/resolver/home';
import { FaqService } from './service/faq.service';
import { ArticleResolver } from './service/resolver/articleResolver';
import { ServiceComponent } from './website/service/service.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        resolve:{
            testimonial:TestimonialResolver,
            faqDto:FAqResolver,
            serviceDto:ServiceResolver,
            articleDto:ArticleResolver,

        }
    },
    {
        path:'service',
        component:ServiceComponent,
        resolve:{
            serviceDto:ServiceResolver, 
        }
    
    },
    {
        path:'**' , redirectTo:'',pathMatch:'full'
    }
];
