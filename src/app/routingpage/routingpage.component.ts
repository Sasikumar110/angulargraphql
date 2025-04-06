import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MemberpageComponent } from "../memberpage/memberpage.component";

@Component({
  selector: 'app-routingpage',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './routingpage.component.html',
  styleUrl: './routingpage.component.css'
})
export class RoutingpageComponent {

  faultvalue:string;
  @Output() childemit:EventEmitter<String> =  new EventEmitter;

  


}
