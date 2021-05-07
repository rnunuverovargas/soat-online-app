import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Persona } from './shared/Persona';
import { PersonaQuery } from './shared/personaQuery';
import { politicasComponent } from './politicas/politicas.component';
import { MatDialog } from '@angular/material/dialog';
import { ContratanteService } from 'src/app/services/contratante.service';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { UbigeoService } from 'src/app/services/ubigeo.service';

@Component({
  selector: 'app-InfoPersona',
  templateUrl: './InfoPersona.component.html'
})
export class InfoPersonaComponent implements OnInit {
  placa: string;
  query: PersonaQuery;
  Persona: Persona;
  acceptPolicies: boolean;
  departamentos = [];
  provincias = [];
  distritos = [];
  tipoDoc: string = "";
  doc: string = "";

  constructor(
      private route: ActivatedRoute, 
      public dialog: MatDialog, 
      private router: Router,
      private readonly catalogoService: CatalogoService,
      private readonly contratanteService: ContratanteService,
      private readonly ubigeoService: UbigeoService) { 

    this.Persona = new Persona();
    this.Persona.tipoDocumento = '-1';
    this.Persona.numeroDocumento = '';
    this.Persona.nombres = '';
    this.Persona.apellidoPaterno = '';
    this.Persona.apellidoMaterno = '';
    this.Persona.celular = '';
    this.Persona.correo = '';
    this.Persona.departamento = "-1";
    this.Persona.provincia = "-1";
    this.Persona.distrito = "-1";
    this.Persona.direccion = '';

    this.ubigeoService.getDepartments().subscribe((rest: any) => {
        this.departamentos = (rest.departamentos || []).map((item) => {
          item.value = item.GEO1_ID;
          item.label = item.GEO1;
          return item;
        });
    });
  }

  ngOnInit() {
      this.route.queryParamMap
          .subscribe(param => {
              this.tipoDoc = param.get('tipo_documento');
              this.doc = param.get('documento');
              if (this.tipoDoc && this.doc) {
                this.loadPerson();
              }
          });
  }

  loadPerson() {
    this.contratanteService.getContratante(this.tipoDoc, this.doc).subscribe((rest: any) => {
        var personData = (rest || {}).contratante || [];

        if (personData.length) {
            this.Persona.tipoDocumento = this.tipoDoc;
            this.Persona.numeroDocumento = this.doc;
            this.Persona.nombres = personData[0].NOMBRES;
            this.Persona.apellidoPaterno = personData[0].APELLIDO1;
            this.Persona.apellidoMaterno = personData[0].APELLIDO2;
            this.Persona.celular = personData[0].TELEFONO_MOVIL;
            this.Persona.correo = personData[0].EMAIL;
            this.Persona.departamento = personData[0].GEO1_ID;
            this.Persona.provincia = personData[0].GEO2_ID;
            this.Persona.distrito = personData[0].GEO3_ID;
            this.Persona.direccion = personData[0].DIRECCION;

            this.getProvincias(this.Persona.departamento);
            this.getDistritos(this.Persona.departamento, this.Persona.provincia);
        }
    });
  }

  onChangeDepartamentos(ev) {
    var id = ev.target.value;
    this.Persona.departamento = id;
    this.Persona.provincia = '-1';
    this.Persona.distrito = '-1';
    this.getProvincias(id);
  }

  getProvincias(id) {
    this.ubigeoService.getProvinces(id).subscribe((rest: any) => {
        this.provincias = (rest.provincias || []).map((item) => {
          item.value = item.GEO2_ID;
          item.label = item.GEO2;
          return item;
        });
    });
  }

  onChangeProvincias(ev) {
    var id = ev.target.value;
    this.Persona.provincia = id;
    this.Persona.distrito = '-1';
    this.getDistritos(this.Persona.departamento, id);
  }

  getDistritos(departmentId, provinceId) {
    this.ubigeoService.getDistricts(departmentId, provinceId).subscribe((rest: any) => {
        this.distritos = (rest.distritos || []).map((item) => {
          item.value = item.GEO3_ID;
          item.label = item.GEO3;
          return item;
        });
    });
  }

  viewPolicies() {
      this.dialog.open(politicasComponent);
  }

  verCobertura() {
      let data = JSON.parse(sessionStorage.getItem('dt'));
      data.ct = this.Persona;
      sessionStorage.setItem('dt', JSON.stringify(data));
      this.router.navigate(['/cobertura']);
  }
}
