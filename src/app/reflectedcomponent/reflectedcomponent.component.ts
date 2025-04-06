import { Component, effect, inject } from '@angular/core';
import { HomepageService } from '../homepage/homepage.service';

@Component({
  selector: 'app-reflectedcomponent',
  standalone: true,
  imports: [],
  templateUrl: './reflectedcomponent.component.html',
  styleUrl: './reflectedcomponent.component.css'
})
export class ReflectedcomponentComponent {

  public reflectd = inject(HomepageService);
  public itemvalue = this.reflectd.dispatchOrderdata;
  
  public nameItems:string[];

  constructor(){
    effect(() => {
      console.log('Received items in AnotherComponent:', this.itemvalue());
    });
  }
}
