import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registerentity } from './registerentity';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseUrl="http://localhost:7080";

  constructor(private http:HttpClient) { }

  getAllValues():Observable<Registerentity[]>
  {
     return this.http.get<Registerentity[]>(`${this.baseUrl}/getAll`);
  }
}
