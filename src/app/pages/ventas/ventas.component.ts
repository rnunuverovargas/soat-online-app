import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { VentasService } from 'src/app/services/ventas.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css'],
})
export class VentasComponent implements OnInit{

  ventas = [];

  ventasForm = this.fb.group({
    filtros: this.fb.array([
      this.fb.group({
        NRO_DOC: '',
        PLACA: '',
        TIPO_VEH_ID: 0,
        USO_VEH_ID: 0,
        ZONA_VEH_ID: 0,
        FEC_EMISION: '',
        NRO_CERT_SOAT: ''
      })
    ])
  });

  get filtros() {
    return (<FormArray>(<FormGroup>this.ventasForm).get('filtros')).controls;
  }

  constructor(
        private fb: FormBuilder, 
        private readonly ventasService: VentasService,
        private router: Router
    ) { }

  getVentas(dataUser) {
    const token = sessionStorage.getItem('token');
    const header = { Authorization: 'Bearer ' + token };
    const param = '';

    if(token == "undefined"){ alert("Favor de Iniciar Sesión como Administrador") } 
    else{ this.ventasService.getVentas(dataUser, header).subscribe((rest: any) => { this.ventas = rest.resultado; }) }
  }

  onSubmit() {
    this.getVentas(this.ventasForm.value);
  }

  ngOnInit(): void {
    
  }
}
