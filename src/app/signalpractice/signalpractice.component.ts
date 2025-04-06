import { Component, inject, signal } from '@angular/core';
import { HomepageService } from '../homepage/homepage.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReflectedcomponentComponent } from "../reflectedcomponent/reflectedcomponent.component";

@Component({
  selector: 'app-signalpractice',
  standalone: true,
  imports: [CommonModule, FormsModule, ReflectedcomponentComponent],
  templateUrl: './signalpractice.component.html',
  styleUrl: './signalpractice.component.css'
})
export class SignalpracticeComponent {

  public accessService = inject(HomepageService);

  public inputValues:string = '';

  
  public options = [
    { name:"saravan",code:'001'},
    { name:"manikandan",code:'002'},
    { name:"arivu",code:'003'},
  ];
  
  public itemvalue = signal(this.options.map(item => item.name));

constructor(){
  this.accessService.dispatchOrderdata.set(this.options.map(item=>item.name));
}


 onSubmit(){
  console.log(this.inputValues);
  if (!this.inputValues.trim()) return;
  const newItem = { name: this.inputValues, code: String(Date.now()) };
  this.options.push(newItem); // Update raw array
  this.accessService.dispatchOrderdata.set(this.options.map(item => item.name)); // Update the signal
  this.inputValues = ''; 
 }
}
