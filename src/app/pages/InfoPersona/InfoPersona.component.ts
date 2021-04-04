import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";


import { Persona } from './shared/Persona';
import { PersonaQuery } from './shared/personaQuery';
import { politicasComponent } from './politicas/politicas.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-InfoPersona',
  templateUrl: './InfoPersona.component.html'
})
export class InfoPersonaComponent implements OnInit {

  placa: string;
  query: PersonaQuery;
  Persona: Persona;
  acceptPolicies: boolean;


  departamentos = [
      { value: '1', label: 'Lima' },
      { value: '2', label: 'Arequipa' },
      { value: '3', label: 'La Libertad' }
  ];

  provincias = [
      { value: '1', label: 'Lima' },
      { value: '2', label: 'Barranca' },
      { value: '3', label: 'Cajatambo' }
  ];

  distritos = [
      { value: '1', label: 'Lima' },
      { value: '2', label: 'Miraflores' },
      { value: '3', label: 'San Isidro' },
      { value: '4', label: 'San Martin de Porres' }
  ];


  constructor(private route: ActivatedRoute, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
      this.route.queryParamMap
          .subscribe(param => {
              let tipoDoc = param.get('tipo_documento');
              let doc = param.get('documento');
              this.query = { numeroDocumento: doc, tipoDocumento: tipoDoc };
              this.loadPerson();
          });
  }

  loadPerson() {
      this.Persona = {
          tipoDocumento: this.query.tipoDocumento,
          numeroDocumento: this.query.numeroDocumento,
          nombres: 'Jhonatan Josue',
          apellidoPaterno: 'Machaca',
          apellidoMaterno: 'Canchanya',
          celular: '992407364',
          correo: 'jmachaca7392@gmail.com',
          departamento: '1',
          provincia: '1',
          distrito: '4',
          direccion: 'Manzana J Lote 2 Urbanización Mi Terruño'                    
      }
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
