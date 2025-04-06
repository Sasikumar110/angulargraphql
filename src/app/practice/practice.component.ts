import { Component } from '@angular/core';
import { ReflectedcomponentComponent } from "../reflectedcomponent/reflectedcomponent.component";

@Component({
  selector: 'app-practice',
  standalone: true,
  imports: [ReflectedcomponentComponent],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.css'
})
export class PracticeComponent {

}
