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

  params:any = {
      NRO_DOC: '',
      PLACA: '',
      TIPO_VEH_ID: 0,
      USO_VEH_ID: 0,
      ZONA_VEH_ID: 0,
      FEC_EMISION: '',
      NRO_CERT_SOAT: ''
  }

  constructor(
        private fb: FormBuilder, 
        private readonly ventasService: VentasService,
        private router: Router
    ) { 
      this.onSearch();
    }

  getVentas(dataUser) {
    const token = sessionStorage.getItem('token');
    const header = { Authorization: 'Bearer ' + token };

    var data = {
      filtros: [dataUser]
    }

    this.ventasService.getVentas(data, header).subscribe((rest: any) => { 
      this.ventas = rest.resultado; 
    });
  }

  onSearch() {
    var data = {
      NRO_DOC: this.params.NRO_DOC ? String(this.params.NRO_DOC) : '',
      PLACA: String(this.params.PLACA),
      TIPO_VEH_ID: 0,
      USO_VEH_ID: 0,
      ZONA_VEH_ID: 0,
      FEC_EMISION: '',
      NRO_CERT_SOAT: ''
    }

    this.getVentas(data);
  }

  ngOnInit(): void {
    
  }
}
