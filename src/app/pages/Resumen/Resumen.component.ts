import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import 'src/culqi.js';

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

  constructor(private router: Router) {
      let ref = this;
      document.addEventListener('culqiResponse', (e: any) => {
          if (e.detail.token)
              ref.router.navigate(['/confirmacion']);
          else
              console.log(e.detail.error);
      }, false);
  }

  ngOnInit() {
      Culqi.publicKey = 'pk_test_gg8EU9cGeF7EQO0W';
      Culqi.settings({
          title: 'Soat en linea',
          currency: 'PEN',
          description: 'Soat en linea',
          amount: 7500
      });
      
      let data = JSON.parse(sessionStorage.getItem('dt'));
      if (data && data.vh) {
          this.placa = data.vh.placa;
          this.inicioVigencia = data.vh.nuevoInicioVigencia;
          this.finVigencia = data.vh.nuevoFinVigencia
      }
  }

  accept() {
      Culqi.open();
  }

}
