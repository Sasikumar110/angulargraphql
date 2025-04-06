import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Registerentity } from '../register/registerentity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisteruserService {

  private baseUrl="http://localhost:7080/save";

  constructor(private http:HttpClient) { }

  SaveThedata(entity:Registerentity):Observable<Object>
  {
     return this.http.post(`${this.baseUrl}`,entity);
  }
}
