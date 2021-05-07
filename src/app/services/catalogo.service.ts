import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  constructor(private readonly http: HttpClient) { }

  getDocumentTypes() {
    const tipoCatalogoId = 1;
    return this.http.get(`https://localhost:44313/api/Catalogo/ObtenerCatalogo/${tipoCatalogoId}`);
  }

  getGenders() {
    const tipoCatalogoId = 2;
    return this.http.get(`https://localhost:44313/api/Catalogo/ObtenerCatalogo/${tipoCatalogoId}`);
  }

  getCivilStatus() {
    const tipoCatalogoId = 3;
    return this.http.get(`https://localhost:44313/api/Catalogo/ObtenerCatalogo/${tipoCatalogoId}`);
  }

  getVehicleTypes() {
    const tipoCatalogoId = 4;
    return this.http.get(`https://localhost:44313/api/Catalogo/ObtenerCatalogo/${tipoCatalogoId}`)
  }

  getVehicleUses() {
    const tipoCatalogoId = 5;
    return this.http.get(`https://localhost:44313/api/Catalogo/ObtenerCatalogo/${tipoCatalogoId}`)
  }

  getVehicularZones() {
    const tipoCatalogoId = 6;
    return this.http.get(`https://localhost:44313/api/Catalogo/ObtenerCatalogo/${tipoCatalogoId}`)
  }

  getCurrencies() {
    const tipoCatalogoId = 6;
    return this.http.get(`https://localhost:44313/api/Catalogo/ObtenerCatalogo/${tipoCatalogoId}`)
  }
}
