import { Injectable } from '@angular/core';
import { HttpCommonService } from './../common-shared/http-common.service';
import { Observable } from 'rxjs';

export interface login {
  username: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpService: HttpCommonService) { }

  login(data: login): Observable<object> {
    return this.httpService.httpCall('loginuser', 'post', data);
  }
}
