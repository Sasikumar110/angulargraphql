import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loginentity } from './loginentity';

@Injectable({
  providedIn: 'root'
})
export class LoginpageService {

  private baseUrl="http://localhost:7080/login/details"
  constructor(public http:HttpClient) { }

  getLoginDetails(log:Loginentity):Observable<any>
  {
    console.log(log);
    return this.http.post<any>(`${this.baseUrl}`,log);
  }
}
