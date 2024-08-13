import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { ArticleDto } from "../../model/article";
import { Observable } from "rxjs";
import { inject } from "@angular/core";
import { BlogService } from "../blog.service";

export const ArticleResolver:ResolveFn<ArticleDto>=(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<ArticleDto>=> {
    return inject(BlogService).getArticle();
    }