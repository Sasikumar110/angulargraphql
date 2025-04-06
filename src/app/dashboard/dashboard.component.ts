import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { LoginpageComponent } from "../loginpage/loginpage.component";
import { MemberpageComponent } from "../memberpage/memberpage.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RoutingpageComponent } from "../routingpage/routingpage.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [LoginpageComponent, MemberpageComponent, CommonModule, FormsModule, RouterModule, RoutingpageComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements AfterViewInit{

  selectval="";
@ViewChild(MemberpageComponent) member:MemberpageComponent;

ngAfterViewInit(): void {
 this.selectval=this.member.childData1;
} 
  


parentName:string;

childName:string;



}
