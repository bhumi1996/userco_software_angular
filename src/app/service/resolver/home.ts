import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";

import {Observable} from "rxjs";

import {inject} from "@angular/core";
import { TestimonialDto } from "../../model/testimonial";
import { TestimonailService } from "../testimonail.service";
import { FaqDto } from "../../model/faq";
import { FaqService } from "../faq.service";
import { ServiceDto } from "../../model/service";
import { ServiceService } from "../service.service";


export const TestimonialResolver:ResolveFn<TestimonialDto>=(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<TestimonialDto>=> {
return inject(TestimonailService).getTestimonial();
}
export const FAqResolver:ResolveFn<FaqDto>=(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<FaqDto>=> {
    return inject(FaqService).getFaq();
    }
  export const ServiceResolver:ResolveFn<ServiceDto>=(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<ServiceDto>=> {
        return inject(ServiceService).getService();
        }
        
