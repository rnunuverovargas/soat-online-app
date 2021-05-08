import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import 'src/culqi.js';
import { PolizaService } from 'src/app/services/poliza.service';

declare var Culqi: any;

@Component({
  selector: 'app-Resumen',
  templateUrl: './Resumen.component.html',
  styleUrls: ['./Resumen.component.css']
})
export class ResumenComponent implements OnInit {

  inicioVigencia: Date;
  finVigencia: Date;
  placa: Date;
  cobertura: any = {};

  constructor(
      private router: Router,
      private readonly polizaService: PolizaService) {
      let ref = this;
      document.addEventListener('culqiResponse', (e: any) => {
          if (e.detail.token)
              ref.router.navigate(['/confirmacion']);
          else
              console.log(e.detail.error);
      }, false);
  }

  ngOnInit() {
      let data = JSON.parse(sessionStorage.getItem('dt'));

      if (data && data.vh) {
        this.placa = data.vh.placa;
        this.inicioVigencia = data.vh.nuevoInicioVigencia;
        this.finVigencia = data.vh.nuevoFinVigencia
      }

      if (data && data.c) {
        this.cobertura = data.c;
      }

    //   try {
        // window['culqi'].publicKey = 'pk_test_gg8EU9cGeF7EQO0W';
        // window['culqi'].settings({
        //       title: 'Soat en linea',
        //       currency: 'PEN',
        //       description: 'Soat en linea',
        //       amount: (this.cobertura || {}).PRIMA_TOTAL
        //   });
    //   } catch (error) {
          
    //   }
  }

  accept() {
    //   Culqi.open();
    let info = JSON.parse(sessionStorage.getItem('dt'));
 
    var data = {
        contratante: [{
            tipO_DOC_ID: Number(info.ct.tipoDocumento),
            NRO_DOC: String(info.ct.numeroDocumento),
            NOMBRES: String(info.ct.nombres),
            APELLIDO1: String(info.ct.apellidoPaterno),
            APELLIDO2: String(info.ct.apellidoMaterno),
            FONO_MOVIL: String(info.ct.celular),
            EMAIL: String(info.ct.correo),
            GEO1_ID: String(info.ct.departamento),
            GEO2_ID: String(info.ct.provincia),
            GEO3_ID: String(info.ct.distrito),
            DIRECCION: String(info.ct.direccion)
        }],
        vehiculo: [{
            PLACA: String(info.vh.placa),
            MARCA_ID: Number(info.vh.marca),
            MODELO_ID: Number(info.vh.modelo),
            TIPO_VEH_ID: Number(info.vh.tipo),
            ANIO: Number(info.vh.anio),
            USO_VEH_ID: Number(info.vh.uso),
            ZONA_VEH_ID: Number(info.vh.region)
        }],
        plan: [{
            CIASEG_ID: Number(info.c.CIASEG_ID),
            PRODUCTO_ID: Number(info.c.PRODUCTO_ID),
            PLAN_ID: Number(info.c.PLAN_ID),
            MONEDA_ID: Number(info.c.MONEDA_ID),
            PRIMA_NETA: String(info.c.PRIMA_NETA),
            DERECHOS: String(info.c.DERECHOS),
            IMPUESTOS: String(info.c.IMPUESTOS),
            PRIMA_TOTAL: String(info.c.PRIMA_TOTAL)
        }],
        vigencia: [{
            FEC_VIGENCIA_INI: this.inicioVigencia
        }]
    };

    this.polizaService.createPolicy(data).subscribe((rest: any) => {
        if (rest.txt_response == "Satisfactorio") {
            sessionStorage.clear();
            alert("Gracias por su compra. En breve le llegara una copia a su correo.")
            this.router.navigate(['/home']);
        }
    });

  }
}
