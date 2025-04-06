import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RegisteruserService } from './registeruser.service';
import { Registerentity } from './registerentity';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-registeruser',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './registeruser.component.html',
  styleUrl: './registeruser.component.css'
})
export class RegisteruserComponent {

  entitydata:Registerentity = new Registerentity();
  showdetails=true;
  username="sasikumar";
  password="manikarna";

  constructor(private router:Router,private servie:RegisteruserService){}
  
  OnSubmit()
  {
     this.servie.SaveThedata(this.entitydata).subscribe(data=>{
       console.log(data);
     })
    // this.router.navigate(['/login']);
  }

}
