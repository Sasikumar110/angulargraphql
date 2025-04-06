import { CommonModule } from '@angular/common';
import { Component, inject, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Loginentity } from './loginentity';
import { LoginpageService } from './loginpage.service';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from "../dashboard/dashboard.component";

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, DashboardComponent],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {

  router=inject(Router);
  constructor(private service:LoginpageService){}

  login:Loginentity= new Loginentity();
  errorMessage: string | null = null;

  onSubmit()
  {
    this.errorMessage = null;
    this.service.getLoginDetails(this.login).subscribe(data=>{
      
      this.goToEmployeeList();
      
    },
    error => {
     alert("Please enter correct userid and password");
    })
}

  goToEmployeeList(){
    this.router.navigate(['/memeber']);
  }

  Register()
  {
    this.router.navigate(['/register']);
  }

  confirmation="manikandan";

}
