import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef, ICellRendererParams } from 'ag-grid-community'; 
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

@Component({
  selector: 'app-tabledata',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './tabledata.component.html',
  styleUrl: './tabledata.component.css'
})
export class TabledataComponent {

  rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ];
 
  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: "make"
    },
    { field: "model"
    },
    { field: "price"},
    { field: "electric"},
  ];

 
}


