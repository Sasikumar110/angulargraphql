import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { RegisteruserComponent } from '../registeruser/registeruser.component';
import { SignalpracticeComponent } from "../signalpractice/signalpractice.component";

@Component({
  selector: 'app-homepage', 
  standalone: true,
  imports: [CommonModule, RouterModule, SignalpracticeComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  // router= inject(Router);
  constructor(private router:Router){}
  loginMethod()
  {
    this.router.navigate(['/login']);
  }

  detailsMethod()
  {
    this.router.navigate(['/tabledata']);
  }

  practiceMethod()
  {
    this.router.navigate(['/practice']);
  }

}
