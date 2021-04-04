import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-DetalleCobertura',
  templateUrl: './DetalleCobertura.component.html',
  styleUrls: ['./DetalleCobertura.component.css']
})
export class DetalleCoberturaComponent {
  
    constructor(public dialogRef: MatDialogRef<DetalleCoberturaComponent>) { }

}
