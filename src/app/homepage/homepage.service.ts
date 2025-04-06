import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  public dispatchOrderdata = signal<string[]>([]);

  constructor() { }
}
