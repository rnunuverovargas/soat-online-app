import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CatalogoService } from 'src/app/services/catalogo.service';

@Component({
  selector: 'app-BuscarPersona',
  templateUrl: './BuscarPersona.component.html',
  styleUrls: ['./BuscarPersona.component.css']
})
export class BuscarPersonaComponent implements OnInit {
  numeroDocumento: string;
  tipoDocumento: string = "1";
  tipodocs = [];

  constructor(
    private router: Router,
    private readonly catalogoService : CatalogoService) { }

  ngOnInit() {
    this.catalogoService.getDocumentTypes().subscribe((rest: any) => {
      this.tipodocs = (rest.catalogo || []).map((item) => {
          item.value = item.CATALOGO_ID;
          item.label = item.CATALOGO;
          return item;
      });
    });
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
