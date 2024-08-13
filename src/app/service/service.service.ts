import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ServiceDto } from '../model/service';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ConstantUtil } from '../utility/ConstantUtil';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  _http=inject(HttpClient);

  constructor() { }

  getService():Observable<ServiceDto>{
    return this._http.get<ServiceDto>(`${environment.apiUrl}/${ConstantUtil.service}/${ConstantUtil.list}`);
  }
}
