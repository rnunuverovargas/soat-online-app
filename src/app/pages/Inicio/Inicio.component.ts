import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-Inicio',
  templateUrl: './Inicio.component.html',
  styleUrls: ['./Inicio.component.css']
})
export class InicioComponent implements OnInit {

  placa: string;  
  constructor(private router: Router) { }

  ngOnInit() {}

  search() {
    this.router.navigate(['/vehiculo', this.placa.toUpperCase()]);
  }
}
