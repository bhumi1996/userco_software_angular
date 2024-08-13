import { HttpInterceptorFn } from '@angular/common/http';

export const apiAuthInterceptor: HttpInterceptorFn = (req, next) => {
  const modifiedReq = req.clone({headers: req.headers.append('X-API-KEY','EA543ACDFB252').append('X-API-SECRET','QW6baP81mfBpqDjIJabcfxC3rO76dS83')})
  return next(modifiedReq);
};
