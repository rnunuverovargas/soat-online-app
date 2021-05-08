import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from "@angular/router";
import { Vehiculo } from './shared/Vehiculo';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { UbigeoService } from 'src/app/services/ubigeo.service';


@Component({
  selector: 'app-InfoVehiculo',
  templateUrl: './InfoVehiculo.component.html',
  styleUrls: ['./InfoVehiculo.component.css']
})
export class InfoVehiculoComponent implements OnInit {
  placa: string;
  Vehiculo: Vehiculo;
  tipos: Array<any> = [];
  marcas = [];
  modelos = [];
  usos = [];
  regiones = [];
  selectedMarca: string;
  message: string = "";

  constructor(
      private route: ActivatedRoute, 
      private router: Router, 
      private readonly catalogoService: CatalogoService,
      private readonly vehiculoService: VehiculoService,
      private readonly ubigeoService: UbigeoService) { 
      this.placa = this.route.snapshot.paramMap.get('placa');
      this.Vehiculo = new Vehiculo();
      this.Vehiculo.anio = 2018;
      this.Vehiculo.marca = '-1';
      this.Vehiculo.modelo = '-1';
      this.Vehiculo.placa = this.placa;
      this.Vehiculo.region = '-1';
      this.Vehiculo.tipo = '-1';
      this.Vehiculo.uso = '-1';
      this.Vehiculo.finVigencia = new Date(2015, 2, 29);

      this.catalogoService.getVehicleTypes().subscribe((rest: any) => {
        this.tipos = (rest.catalogo || []).map((item) => {
            item.value = item.CATALOGO_ID;
            item.label = item.CATALOGO;
            return item;
        });
      });
  
      this.vehiculoService.getVehicleMarks().subscribe((rest: any) => {
        this.marcas = (rest.marcas || []).map((item) => {
            item.value = item.MARCA_ID;
            item.label = item.MARCA;
            return item;
        });
      });
  
      this.catalogoService.getVehicleUses().subscribe((rest: any) => {
        this.usos = (rest.catalogo || []).map((item) => {
          item.value = item.CATALOGO_ID;
          item.label = item.CATALOGO;
          return item;
        });
      });

      this.catalogoService.getVehicularZones().subscribe((rest: any) => {
        this.regiones = (rest.catalogo || []).map((item) => {
          item.value = item.CATALOGO_ID;
          item.label = item.CATALOGO;
          return item;
        });
      });
  }

  ngOnInit() {
    if (this.placa) {
      this.vehiculoService.getVehicle(this.placa).subscribe((rest: any) => {
        var vehicleData = (rest || {}).vehiculo || [];

        if (vehicleData.length) {
          this.Vehiculo.anio = vehicleData[0].ANIO;
          this.Vehiculo.marca = vehicleData[0].MARCA_ID;
          this.Vehiculo.modelo = vehicleData[0].MODELO_ID;
          this.Vehiculo.placa = this.placa;
          this.Vehiculo.region = vehicleData[0].ZONA_VEH_ID;
          this.Vehiculo.tipo = vehicleData[0].TIPO_VEH_ID;
          this.Vehiculo.uso = vehicleData[0].USO_VEH_ID;
          this.Vehiculo.finVigencia = new Date(vehicleData[0].FEC_VIGENCIA_FIN);
          this.getModels(this.Vehiculo.marca);
        }
      });
    }
  }

  onChangeMarca(ev) {
    var id = ev.target.value;
    this.Vehiculo.marca = id;
    this.Vehiculo.modelo = '-1';
    this.getModels(id);
  }

  getModels(id) {
    this.vehiculoService.getVehicleModels(id).subscribe((rest: any) => {
      this.modelos = (rest.modelos || []).map((item) => {
        item.value = item.MODELO_ID;
        item.label = item.MODELO;
        return item;
      });
    });
  }

  buscarPersona() {
    this.message = "";
    var validate = this.catalogoService.validateRequired(this.Vehiculo);

    if (validate.success) {
      let data = { vh: this.Vehiculo, ct: null };
      sessionStorage.clear();
      sessionStorage.setItem('dt', JSON.stringify(data));
      console.log(this.Vehiculo);
      this.router.navigate(['/buscarPersona']);
    } else {
      this.message = "Todos los campos son requeridos";
    }
  }
}
