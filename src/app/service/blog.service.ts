import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ConstantUtil } from '../utility/ConstantUtil';
import { Article, ArticleDto } from '../model/article';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  _http=inject(HttpClient);

  constructor() { }

  getArticle():Observable<ArticleDto>{
    return this._http.get<ArticleDto>(`${environment.apiUrl}/${ConstantUtil.article}/${ConstantUtil.list}`);
  }
}
