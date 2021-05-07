import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CatalogoService } from 'src/app/services/catalogo.service';

@Component({
  selector: 'app-Inicio',
  templateUrl: './Inicio.component.html',
  styleUrls: ['./Inicio.component.css']
})
export class InicioComponent implements OnInit {

  placa: string;  
  constructor(private router: Router, private readonly catalogo: CatalogoService) { }

  ngOnInit() {
    // this.catalogo.getDepartments();
  }

  search() {
    this.router.navigate(['/vehiculo', this.placa.toUpperCase()]);
  }
}
