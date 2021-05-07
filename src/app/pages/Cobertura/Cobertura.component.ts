import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetalleCoberturaComponent } from './DetalleCobertura/DetalleCobertura.component';
import { PolizaService } from 'src/app/services/poliza.service';
import { DetallePlanComponent } from './detalle-plan/detalle-plan.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Cobertura',
  templateUrl: './Cobertura.component.html',
  styleUrls: ['./Cobertura.component.css']
})
export class CoberturaComponent implements OnInit {
  AceptarPoliticas: boolean;
  aseguradoras = [];
  coberturas = [];

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private readonly polizaService: PolizaService) { }

  ngOnInit() { 
    var dt:any = sessionStorage.getItem('dt');
    dt = JSON.parse(dt);

    var data = {
      tarifa: [
        {
          PLACA: dt.vh.placa,
          MARCA_ID: Number(dt.vh.marca),
          MODELO_ID: Number(dt.vh.modelo),
          TIPO_VEH_ID: Number(dt.vh.tipo),
          ANIO: Number(dt.vh.anio),
          USO_VEH_ID: Number(dt.vh.uso),
          ZONA_VEH_ID: Number(dt.vh.region)
        }
      ]
    };

    this.polizaService.getRates(data).subscribe((rest: any) => {
      this.aseguradoras = rest.tarifas.map((item) => {
        item.url = "assets/img/" + item.LOGO;
        item.nombre = item.CIASEG;
        return item;
      });
    });
  }

  onShowPlans(data) {
    this.dialog.open(DetallePlanComponent, {
      width: '90%',
      data: data
    });
  }

  VerPoliticas() {
      this.dialog.open(DetalleCoberturaComponent);
  }

  onAccept(aseguradora) {
    let data = JSON.parse(sessionStorage.getItem('dt'));
    data.c = aseguradora;
    sessionStorage.setItem('dt', JSON.stringify(data));
    this.router.navigate(['/vigencia']);
  }
}
