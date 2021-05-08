import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  allFields: {};

  constructor(private readonly http: HttpClient) { }

  validateRequired(fields) {
    var ready = true;
    var errorFields = [];

    Object.keys(fields).map((item, i) => {
      if (fields[item] == null || fields[item]  ==  undefined || fields[item]  == "" || fields[item]  == "-1") {
        ready = false;
        errorFields.push(item)
      }
    });

    return {
      success: ready,
      fields: errorFields
    }
  }

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
