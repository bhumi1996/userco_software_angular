import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ServiceDto } from '../model/service';
import { Observable } from 'rxjs';
import { FaqDto } from '../model/faq';
import { environment } from '../../environments/environment';
import { ConstantUtil } from '../utility/ConstantUtil';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  _http=inject(HttpClient);

  constructor() { }

  getFaq():Observable<FaqDto>{
    return this._http.get<FaqDto>(`${environment.apiUrl}/${ConstantUtil.faq}/${ConstantUtil.list}`);
  }
}
