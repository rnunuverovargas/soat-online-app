import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-BuscarPersona',
  templateUrl: './BuscarPersona.component.html',
  styleUrls: ['./BuscarPersona.component.css']
})
export class BuscarPersonaComponent implements OnInit {

  numeroDocumento: string;
  tipoDocumento: string = "1";

  tipodocs = [
      { label: 'DNI', value: '1' },
      { label: 'OTRO', value: '2' }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  search() {
      this.router
          .navigate(['/persona'], {
              queryParams: {
                  tipo_documento: this.tipoDocumento,
                  documento: this.numeroDocumento
              }
          });
  }

}
