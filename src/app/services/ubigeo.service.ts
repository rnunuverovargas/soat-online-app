import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UbigeoService {

  constructor(private readonly http: HttpClient) { }

  getDepartments() {
    return this.http.get(`https://localhost:44313/api/Ubigeo/ObtenerDepartamentos`)
  }

  getProvinces(departmentId) {
    return this.http.get(`https://localhost:44313/api/Ubigeo/ObtenerProvincias/${departmentId}`);
  }

  getDistricts(departmentId, provinceId) {
    return this.http.get(`https://localhost:44313/api/Ubigeo/ObtenerDistritos/${departmentId}/${provinceId}`);
  }
}
