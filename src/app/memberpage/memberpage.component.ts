import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DashboardComponent } from "../dashboard/dashboard.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-memberpage',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './memberpage.component.html',
  styleUrl: './memberpage.component.css'
})
export class MemberpageComponent {

 @Input() memberval:string;

 childData1="hi data child1";
 childData2='hi data child2';

 @Output() childValChange:EventEmitter<String> = new EventEmitter;

 OnChangeEvent(event:string):void
 {
   this.childValChange.emit(event);
 }

}
