import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PolizaService {

  constructor(private readonly http: HttpClient) { }

  getRates(data) {
    return this.http.post<any>('https://localhost:44313/api/Tarifa/ObtenerTarifas', data);
  }

  getCoverages(planId) {
    return this.http.get(`https://localhost:44313/api/Cobertura/ObtenerCobertura/${planId}`);
  }

  createPolicy(data) {
    return this.http.post<any>('https://localhost:44313/api/Poliza/Emitir', data);
  }
}
