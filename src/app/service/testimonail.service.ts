import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TestimonialDto } from '../model/testimonial';
import { Observable } from 'rxjs';
import { ConstantUtil } from '../utility/ConstantUtil';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestimonailService {


  _http=inject(HttpClient);

  constructor() { }

  getTestimonial():Observable<TestimonialDto>{
    return this._http.get<TestimonialDto>(`${environment.apiUrl}/${ConstantUtil.testimonial}/${ConstantUtil.list}`);
  }


}
