import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-Vigencia',
  templateUrl: './Vigencia.component.html',
  styleUrls: ['./Vigencia.component.css']
})
export class VigenciaComponent implements OnInit {

  finVigencia: Date;
  inicioVigencia: Date;
  minDate: Date = new Date();

  constructor(private router: Router) { }

  ngOnInit() {
      let data = JSON.parse(sessionStorage.getItem('dt'));
      if (data && data.vh) {
          this.finVigencia = data.vh.finVigencia || new Date();
          this.inicioVigencia = data.vh.finVigencia || new Date();

          if (this.inicioVigencia < new Date()) {
              this.inicioVigencia = new Date();
          } else if (this.inicioVigencia === new Date()) {
              this.inicioVigencia = new Date();
              this.inicioVigencia.setDate(this.inicioVigencia.getDate() + 1);
          } else {
              this.inicioVigencia = new Date();
          }

      }


  }

  get nuevoFinVigencia() {
      let nuevoFin = this.inicioVigencia;
      let year = nuevoFin.getFullYear();
      let month = nuevoFin.getMonth();
      let day = nuevoFin.getDate();
      return new Date(year + 1, month, day)
  }

  viewSummary(): void {
      let data = JSON.parse(sessionStorage.getItem('dt'));
      data.vh.nuevoInicioVigencia = this.inicioVigencia;
      data.vh.nuevoFinVigencia = this.nuevoFinVigencia;
      sessionStorage.setItem('dt', JSON.stringify(data));
      this.router.navigate(['/resumen']);
  }
}
