import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseURL = 'https://localhost:7023/api/';
  private token: string | null = null;

  constructor(private http: HttpClient) {}

  public getData(endPoint: string): Observable<any> {
    return this.http.get(`${this.baseURL + endPoint}`);
  }

  public getDataWithToken(endPoint: string): Observable<any> {
    this.token = localStorage.getItem('token') ?? null;
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    };
    return this.http.get(`${this.baseURL + endPoint}`, httpOptions);
  }

  public postData(endPoint: string, data: any): Observable<any> {
    return this.http.post(`${this.baseURL + endPoint}`, data);
  }

  public postDataWithToken(endPoint: string, data: any): Observable<any> {
    this.token = localStorage.getItem('token') ?? null;
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    };
    return this.http.post(`${this.baseURL + endPoint}`, data, httpOptions);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
