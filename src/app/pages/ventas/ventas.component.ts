import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  position: number;
  usuario: string;
  producto: string;
  placa: string;
  precio: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, usuario: 'APEREZ', producto: 'PACIFICO', placa: 'SID-643', precio: 750.00 },
  {position: 2, usuario: 'FGONZALEZ', producto: 'PACIFICO', placa: 'BEH-852', precio: 750.00 },
  {position: 3, usuario: 'GQUILLE', producto: 'RIMAC', placa: 'KEY-569', precio: 650.00 },
  {position: 4, usuario: 'BHUERTAS', producto: 'PACIFICO', placa: 'GHJ-525', precio: 750.00 }
];
@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent {
  displayedColumns: string[] = ['position', 'usuario', 'producto', 'placa', 'precio'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
