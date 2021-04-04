import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from "@angular/router";
import { Vehiculo } from './shared/Vehiculo';


@Component({
  selector: 'app-InfoVehiculo',
  templateUrl: './InfoVehiculo.component.html',
  styleUrls: ['./InfoVehiculo.component.css']
})
export class InfoVehiculoComponent implements OnInit {

  placa: string;
  Vehiculo: Vehiculo;
  marcas = [
      { value: '1', label: 'Toyota' },
      { value: '2', label: 'Kia' },
      { value: '3', label: 'Hyundai' }
  ];

  modelos = [
      { value: '1', label: 'Corolla' },
      { value: '2', label: 'Cerato' },
      { value: '3', label: 'Elantra' },
      { value: '4', label: 'Tucson' }
  ];

  tipos = [
      { value: '1', label: 'Automovil' },
      { value: '2', label: 'Camioneta' },
      { value: '3', label: 'Furgoneta' }
  ];

  usos = [
      { value: '1', label: 'Particular' },
      { value: '2', label: 'Taxi' },
      { value: '3', label: 'Carga' }
  ];

  regiones = [
      { value: '1', label: 'Lima' },
      { value: '2', label: 'Arequipa' }
  ];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
      this.placa = this.route.snapshot.paramMap.get('placa');
      this.Vehiculo = new Vehiculo();
      this.Vehiculo.anio = 2018;
      this.Vehiculo.marca = '3';
      this.Vehiculo.modelo = '4';
      this.Vehiculo.placa = this.placa;
      this.Vehiculo.region = '1';
      this.Vehiculo.tipo = '2';
      this.Vehiculo.uso = '1';
      this.Vehiculo.finVigencia = new Date(2015, 2, 29);
  }

  buscarPersona() {
    let data = { vh: this.Vehiculo, ct: null };
    sessionStorage.clear();
    sessionStorage.setItem('dt', JSON.stringify(data));
    this.router.navigate(['/buscarPersona']);
}

}
