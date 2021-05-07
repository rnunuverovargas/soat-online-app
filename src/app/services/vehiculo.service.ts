import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private readonly http: HttpClient) { }

  getVehicleMarks() {
    return this.http.get(`https://localhost:44313/api/Vehiculo/ObtenerMarcas`)
  }

  getVehicleModels(marcaId) {
    return this.http.get(`https://localhost:44313/api/Vehiculo/ObtenerModelos/${marcaId}`)
  }

  getVehicle(placa) {
    return this.http.get(`https://localhost:44313/api/Vehiculo/ObtenerVehiculo/${placa}`)
  }
}
