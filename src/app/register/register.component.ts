import { Component, OnInit } from '@angular/core';
import { Registerentity } from './registerentity';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent  implements OnInit{

  getData:Registerentity[];

  constructor(private service:RegisterService,private router:Router)
  {
    
  }
  ngOnInit(): void {
    this.getDetails();
  }

  private getDetails()
  {
    this.service.getAllValues().subscribe(data=>{
      this.getData=data;
      console.log(data);
    })
  }

  

}
