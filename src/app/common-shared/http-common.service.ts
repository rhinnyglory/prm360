import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class HttpCommonService {

  constructor(private http: HttpClient) { }

  httpCall(url: string, method: string, data?: any): Observable<any> {
    // const headers = new HttpHeaders();
    // headers.set("Content-Type", "application/json");
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Access-Control-Allow-Origin', '*');
    headers = headers.append('Accept', 'application/json',);
    headers = headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    headers = headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    headers = headers.append('Access-Control-Allow-Credentials', 'true');
    console.log(headers.get('Content-Type'), headers.get('Accept'), 'Content-Type');
    return this.http[method](environment.url + url, data, { headers: headers })
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
