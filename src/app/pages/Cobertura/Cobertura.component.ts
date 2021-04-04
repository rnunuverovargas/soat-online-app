import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetalleCoberturaComponent } from './DetalleCobertura/DetalleCobertura.component';

@Component({
  selector: 'app-Cobertura',
  templateUrl: './Cobertura.component.html',
  styleUrls: ['./Cobertura.component.css']
})
export class CoberturaComponent implements OnInit {

  AceptarPoliticas: boolean;

  coberturas = [
      { nombre: 'Muerte accidental', valor: 'Hasta 4 UIT' },
      { nombre: 'Invalidez permanente', valor: 'Hasta 1 UIT' },
      { nombre: 'Incapacidad temporal', valor: 'Hasta 5 UIT' }
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit() { }

  VerPoliticas() {
      this.dialog.open(DetalleCoberturaComponent);
  }
}
